import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  deleteToken,
  getMessaging,
  getToken,
  isSupported,
  onMessage,
  type MessagePayload,
} from "firebase/messaging";
import { httpService } from "@/services/http/http.service.ts";
import {
  FIREBASE_CONFIG,
  FIREBASE_SW_PATH,
  FIREBASE_VAPID_KEY,
} from "@/constants/firebase";

const PUSH_TOKENS_API_URL = "/push-tokens";

export const PUSH_RESULT = {
  enabled: "enabled",
  denied: "denied",
  unsupported: "unsupported",
} as const;

export type PushResult = (typeof PUSH_RESULT)[keyof typeof PUSH_RESULT];

let app: FirebaseApp | null = null;
let tokenRequest: Promise<string> | null = null;

const canUsePush = async () =>
  Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_VAPID_KEY) && (await isSupported());


const isPushAllowed = async () =>
  (await canUsePush()) && Notification.permission === "granted";

const getAppMessaging = () =>
  getMessaging((app ??= initializeApp(FIREBASE_CONFIG)));

const requestToken = async () => {
  const swUrl = `${FIREBASE_SW_PATH}?${new URLSearchParams(FIREBASE_CONFIG)}`;
  const serviceWorkerRegistration = await navigator.serviceWorker.register(swUrl);
  return getToken(getAppMessaging(), {
    vapidKey: FIREBASE_VAPID_KEY,
    serviceWorkerRegistration,
  });
};

const getCurrentToken = () =>
  (tokenRequest ??= requestToken().finally(() => {
    tokenRequest = null;
  }));

const saveToken = async () => {
  const token = await getCurrentToken();
  if (!token) return false;
  await httpService.post(PUSH_TOKENS_API_URL, { token });
  return true;
};


export const enablePush = async (): Promise<PushResult> => {
  if (!(await canUsePush())) return PUSH_RESULT.unsupported;
  const permission = await Notification.requestPermission();
  if (permission !== "granted") return PUSH_RESULT.denied;
  return (await saveToken()) ? PUSH_RESULT.enabled : PUSH_RESULT.unsupported;
};

export const refreshPushToken = async () => {
  if (await isPushAllowed()) await saveToken();
};

export const listenToReminders = async (
  onReminder: (payload: MessagePayload) => void,
) => {
  if (await isPushAllowed()) return onMessage(getAppMessaging(), onReminder);
};

export const disablePush = async () => {
  if (!(await isPushAllowed())) return;
  const token = await getCurrentToken();
  if (!token) return;
  await httpService.delete(PUSH_TOKENS_API_URL, { data: { token } });
  await deleteToken(getAppMessaging());
};
