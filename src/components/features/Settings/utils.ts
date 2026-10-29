import {
  ADDITIONAL_FACTOR_OPTIONS,
  DEFAULT_WATER_GOAL_ML,
  WATER_ML_PER_KG,
  PHYSICAL_LOAD_OPTIONS,
  WEATHER_OPTIONS,
  type GoalPart,
  type GoalSettings,
} from "./constants";
import type { Gender } from "@/types/user";
import { SETTINGS_TEXTS } from "@/constants/texts/settings";

export const formatExtraWater = (extra: number) =>
  extra === 0 ? SETTINGS_TEXTS.goalParts.noExtra : SETTINGS_TEXTS.goalParts.extra(extra);

const getSelectedOptions = ({ weather, physicalLoad, factors }: GoalSettings) => ({
  weatherOption: WEATHER_OPTIONS.find((option) => option.value === weather),
  loadOption: PHYSICAL_LOAD_OPTIONS.find((option) => option.value === physicalLoad),
  activeFactors: ADDITIONAL_FACTOR_OPTIONS.filter((option) => factors[option.key]),
});

export const getBaseWater = (weight: number, gender: Gender) =>
  weight ? Math.round(weight * WATER_ML_PER_KG[gender]) : DEFAULT_WATER_GOAL_ML;

export const getWaterGoalParts = (settings: GoalSettings): GoalPart[] => {
  const { weight, gender } = settings;
  const { weatherOption, loadOption, activeFactors } = getSelectedOptions(settings);

  const parts: GoalPart[] = [
    {
      key: "base",
      icon: "lucide:scale",
      label: SETTINGS_TEXTS.goalParts.base(weight),
      amount: getBaseWater(weight, gender),
    },
  ];

  if (weatherOption?.extra) {
    parts.push({
      key: "weather",
      icon: "lucide:sun",
      label: weatherOption.label,
      amount: weatherOption.extra,
    });
  }

  if (loadOption?.extra) {
    parts.push({
      key: "load",
      icon: "lucide:dumbbell",
      label: loadOption.label,
      amount: loadOption.extra,
    });
  }

  return [
    ...parts,
    ...activeFactors.map((factor) => ({
      key: factor.key,
      icon: factor.icon,
      label: factor.title,
      amount: factor.extra,
    })),
  ];
};
