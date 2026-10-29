import coolImage from "@/assets/images/settings/cool.jpg";
import mildImage from "@/assets/images/settings/mild.jpg";
import hotImage from "@/assets/images/settings/hot.jpg";
import heatwaveImage from "@/assets/images/settings/heatwave.jpg";
import sedentaryImage from "@/assets/images/settings/sedentary.jpg";
import moderateImage from "@/assets/images/settings/moderate.jpg";
import heavyImage from "@/assets/images/settings/heavy.jpg";
import athleticImage from "@/assets/images/settings/athletic.jpg";
import sweatingImage from "@/assets/images/settings/sweating.jpg";
import caffeineImage from "@/assets/images/settings/caffeine.jpg";
import feverImage from "@/assets/images/settings/fever.jpg";
import { SETTINGS_TEXTS } from "@/constants/texts/settings";
import type { Gender } from "@/types/user";
import type { ActivityLevel, Climate } from "@/types/water";

export type SettingsTab = "goal" | "reminders";
export type WeatherCondition = Climate;
export type PhysicalLoad = ActivityLevel;
export type FactorKey = "heavySweating" | "caffeine" | "recovery";
export type Factors = Record<FactorKey, boolean>;

export type GoalSettings = {
  weight: number;
  gender: Gender;
  weather: WeatherCondition;
  physicalLoad: PhysicalLoad;
  factors: Factors;
};

export type GoalOption<T extends string> = {
  value: T;
  label: string;
  subtitle: string;
  image: string;
  extra: number;
};

export type GoalPart = {
  key: string;
  icon: string;
  label: string;
  amount: number;
};

export const DEFAULT_WATER_GOAL_ML = 2000;

export const WATER_ML_PER_KG: Record<Gender, number> = {
  male: 35,
  female: 31,
  unspecified: 33,
};

export const SETTINGS_TABS: { value: SettingsTab; label: string }[] = [
  { value: "goal", label: SETTINGS_TEXTS.tabs.goal },
  { value: "reminders", label: SETTINGS_TEXTS.tabs.reminders },
];

export const WEATHER_OPTIONS: GoalOption<WeatherCondition>[] = [
  { value: "cool", ...SETTINGS_TEXTS.weather.cool, image: coolImage, extra: 0 },
  { value: "moderate", ...SETTINGS_TEXTS.weather.moderate, image: mildImage, extra: 200 },
  { value: "warm", ...SETTINGS_TEXTS.weather.warm, image: hotImage, extra: 450 },
  { value: "extreme", ...SETTINGS_TEXTS.weather.extreme, image: heatwaveImage, extra: 800 },
];

export const PHYSICAL_LOAD_OPTIONS: GoalOption<PhysicalLoad>[] = [
  { value: "sedentary", ...SETTINGS_TEXTS.physicalLoad.sedentary, image: sedentaryImage, extra: 0 },
  { value: "moderate", ...SETTINGS_TEXTS.physicalLoad.moderate, image: moderateImage, extra: 300 },
  { value: "heavy", ...SETTINGS_TEXTS.physicalLoad.heavy, image: heavyImage, extra: 650 },
  { value: "athletic", ...SETTINGS_TEXTS.physicalLoad.athletic, image: athleticImage, extra: 1000 },
];

export const ADDITIONAL_FACTOR_OPTIONS: {
  key: FactorKey;
  icon: string;
  image: string;
  title: string;
  description: string;
  extra: number;
}[] = [
  {
    key: "heavySweating",
    icon: "lucide:droplets",
    image: sweatingImage,
    ...SETTINGS_TEXTS.factors.heavySweating,
    extra: 350,
  },
  {
    key: "caffeine",
    icon: "lucide:coffee",
    image: caffeineImage,
    ...SETTINGS_TEXTS.factors.caffeine,
    extra: 250,
  },
  {
    key: "recovery",
    icon: "lucide:thermometer",
    image: feverImage,
    ...SETTINGS_TEXTS.factors.recovery,
    extra: 400,
  },
];
