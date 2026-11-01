<p align="center">
  <img src="docs/logo.png" alt="Waterly" width="260" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/React_Query-FF4154?logo=reactquery&logoColor=white" alt="React Query" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black" alt="Firebase" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Zustand-443E38" alt="Zustand" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?logo=reacthookform&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=white" alt="Zod" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Recharts-22B5BF" alt="Recharts" />
  <img src="https://img.shields.io/badge/Day.js-FB6052" alt="Day.js" />
  <img src="https://img.shields.io/badge/Lodash-3492FF?logo=lodash&logoColor=white" alt="Lodash" />
  <img src="https://img.shields.io/badge/Google_OAuth-4285F4?logo=google&logoColor=white" alt="Google OAuth" />
</p>

# Waterly frontend

Waterly is a water balance tracker. It counts how much water you drink during the day, sets a daily goal for you and reminds you to drink. This repo is the web app for it.

Backend: [Waterly-Backend](https://github.com/Nancyiok/Waterly-Backend)

## What it can do

- register, login, login with Google, reset password
- add, edit and delete water records
- daily progress and how much water is left
- statistics with charts for a week, a month and a year
- history of every day in a calendar
- push reminders to drink water

## How to run

You need Node.js 22 and the backend running.

```bash
npm install
cp .env.example .env.local
npm run dev
```

App: http://localhost:5173

To log in with test data run `npm run db:seed` in the backend and use `demo@waterly.dev` with password `qwerty123`.

## Env variables

All of them are in `.env.example`.

- `VITE_API_URL` is the backend url, locally it is `http://localhost:3000/api`
- `VITE_GOOGLE_CLIENT_ID` is needed for Google login, use the same client as on the backend
- `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, `VITE_FIREBASE_APP_ID` are needed for reminders. Take them from Firebase project settings, your web app config
- `VITE_FIREBASE_VAPID_KEY` is in Firebase project settings, Cloud Messaging tab, Web Push certificates

Firebase project must be the same as on the backend. If Firebase keys are empty the app still works, just without push reminders.

## Scripts

- `npm run dev` runs the app
- `npm run build` builds it to `dist`
- `npm run preview` opens the build
- `npm run lint` checks the code with ESLint
