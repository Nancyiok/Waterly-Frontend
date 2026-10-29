import { useState } from "react";
import { useSearchParams } from "react-router";
import { PageHeader } from "@/components/primitives/PageHeader";
import { SETTINGS_TEXTS } from "@/constants/texts/settings";
import { Tabs } from "@/components/primitives/Tabs";
import { GoalLayout } from "./Goal/GoalLayout";
import { OptionsPanel } from "./Goal/OptionsPanel";
import { AdditionalFactorsPanel } from "./Goal/AdditionalFactorsPanel";
import { GoalSummaryPanel } from "./Goal/GoalSummaryPanel";
import { RemindersPanel } from "./Reminders/RemindersPanel";
import {
  PHYSICAL_LOAD_OPTIONS,
  SETTINGS_TABS,
  WEATHER_OPTIONS,
  type SettingsTab,
} from "./constants";
import { useUserProfileInfo } from "@/store/useUserProfileInfo";
import { useQueryClient } from "@tanstack/react-query";
import {
  useTodayWaterStates,
  WATER_STATS_QUERY_KEY,
} from "@/hooks/useWaterStats";
import { STATISTICS_QUERY_KEY } from "@/hooks/useStatistics";
import { updateWaterStates } from "@/services/water/water.stats.service";
import type { UpdateWaterStats } from "@/types/water";
import { GENDER } from "@/types/user";
import { getWaterGoalParts } from "./utils";
import { isEqual } from "lodash";
import { successToast } from "@/hooks/useToast/useToast";

const isSettingsTab = (value: string | null): value is SettingsTab =>
  SETTINGS_TABS.some((tab) => tab.value === value);

export const Settings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const tab: SettingsTab = isSettingsTab(tabParam) ? tabParam : "goal";
  const setTab = (value: SettingsTab) =>
    setSearchParams({ tab: value }, { replace: true });
  const queryClient = useQueryClient();
  const { data: waterStats } = useTodayWaterStates();
  const profile = useUserProfileInfo((state) => state.user);

  const [draftUserChanges, setDraftUserChanges] = useState<UpdateWaterStats>(
    {},
  );
  const goalSettings = waterStats
    ? { ...waterStats, ...draftUserChanges }
    : null;

  const waterParts = goalSettings
    ? getWaterGoalParts({
        weight: profile?.weight ?? 0,
        gender: profile?.gender ?? GENDER.unspecified,
        weather: goalSettings.climate,
        physicalLoad: goalSettings.activity,
        factors: goalSettings,
      })
    : [];

  const newWaterGoal = waterParts.reduce((acc, part) => acc + part.amount, 0);

  const updatedraftUserChanges = (changes: UpdateWaterStats) =>
    setDraftUserChanges((prev) => ({ ...prev, ...changes }));

  const handleSave = async () => {
    await updateWaterStates(draftUserChanges);
    await queryClient.invalidateQueries({ queryKey: WATER_STATS_QUERY_KEY });
    queryClient.invalidateQueries({ queryKey: STATISTICS_QUERY_KEY });
    setDraftUserChanges({});
    successToast({ message: SETTINGS_TEXTS.toasts.goalUpdated });
  };

  const isWaterPartsChanged = !isEqual(goalSettings, waterStats);

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300">
      <PageHeader
        title={SETTINGS_TEXTS.title}
        description={SETTINGS_TEXTS.description}
      />
      <Tabs
        tabs={SETTINGS_TABS}
        selectedValue={tab}
        onSelectedValueChange={setTab}
      />

      {tab === "goal" && goalSettings && (
        <GoalLayout
          aside={
            <GoalSummaryPanel
              total={goalSettings.waterGoal}
              newTotal={newWaterGoal}
              parts={waterParts}
              onSave={handleSave}
              onReset={() => setDraftUserChanges({})}
              isWaterPartsChanged={isWaterPartsChanged}
            />
          }
        >
          <OptionsPanel
            title={SETTINGS_TEXTS.goalOptions.climateTitle}
            icon="mdi:weather-partly-cloudy"
            iconClassName="text-accent-dark"
            options={WEATHER_OPTIONS}
            value={goalSettings.climate}
            onChange={(climate) => updatedraftUserChanges({ climate })}
          />
          <OptionsPanel
            title={SETTINGS_TEXTS.goalOptions.loadTitle}
            icon="mdi:arm-flex"
            iconClassName="text-primary"
            description={SETTINGS_TEXTS.goalOptions.loadDescription}
            options={PHYSICAL_LOAD_OPTIONS}
            value={goalSettings.activity}
            onChange={(activity) => updatedraftUserChanges({ activity })}
          />
          <AdditionalFactorsPanel
            factors={goalSettings}
            onChange={(key, checked) =>
              updatedraftUserChanges({ [key]: checked })
            }
          />
        </GoalLayout>
      )}

      {tab === "reminders" && <RemindersPanel />}
    </div>
  );
};
