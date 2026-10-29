import { useState } from "react";
import {
  useCreateWaterIntake,
  useTodayWaterIntakes,
  useUpdateWaterIntake,
} from "@/hooks/useWaterIntake";
import { useTodayWaterStates } from "@/hooks/useWaterStats";
import { useWaterReminder } from "@/hooks/useWaterReminder";
import { useSearchParamsManager } from "@/hooks/useSearchParamsManager";
import { successToast } from "@/hooks/useToast/useToast";
import { HomeGreeting } from "./HomeGreeting";
import { DailyProgressHero } from "./DailyProgressBanner/DailyProgressHero";
import { QuickStatsCards } from "./MetricCards/MetricCards";
import { WaterLogList } from "./DailyProgressBanner/WaterLogList/WaterLogList";
import { AddWaterModal } from "./AddWaterModal/AddWaterModal";
import { DeleteWaterLogModal } from "./DeleteWaterLogModal";
import { type WaterLogItem } from "./constants";
import { HOME_TEXTS } from "@/constants/texts/home";

export const HomeDashboard = () => {
  const { params } = useSearchParamsManager();
  const page = Number(params.page) || 0;
  const {
    data: waterLogsData,
    isLoading: isWaterLogsLoading,
    isError: isWaterLogsError,
    refetch: refetchWaterLogs,
  } = useTodayWaterIntakes(page);
  const { mutate: createIntake } = useCreateWaterIntake();
  const { mutate: updateIntake } = useUpdateWaterIntake();
  const { data: waterStats } = useTodayWaterStates();
  const { data: reminder } = useWaterReminder();

  const todayIntakeMl = waterStats?.todayIntakeMl ?? 0;
  const waterGoal = waterStats?.waterGoal ?? 0;
  const percentage = waterStats?.dailyRemainingWaterPercent ?? 0

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<WaterLogItem | null>(null);
  const [deletingItem, setDeletingItem] = useState<WaterLogItem | null>(null);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item: WaterLogItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) =>
    setDeletingItem(waterLogsData?.data?.find((log) => log.id === id) ?? null);

  const handleModalSubmit = (amount: number) => {
    if (editingItem) {
      updateIntake(
        { id: editingItem.id, data: { ml: amount } },
        { onSuccess: () => successToast({ message: HOME_TEXTS.toasts.updated }) },
      );
    } else {
      createIntake(
        { ml: amount },
        { onSuccess: () => successToast({ message: HOME_TEXTS.toasts.added(amount) }) },
      );
    }
  };

  return (
    <div className="w-full max-w-full space-y-8 animate-in fade-in duration-300">
      <HomeGreeting />

      <DailyProgressHero
        currentAmount={todayIntakeMl}
        dailyGoal={waterGoal}
        percentage={percentage}
        onOpenAddModal={handleOpenAdd}
      />
      <QuickStatsCards
        remainingMl={waterStats?.dailyRemainingWater ?? 0}
        weeklyAverageMl={waterStats?.weeklyAverageMl ?? 0}
        nextReminderAt={reminder?.nextReminderAt ?? null}
      />

      <WaterLogList
        waterLogs={waterLogsData}
        isLoading={isWaterLogsLoading}
        isError={isWaterLogsError}
        onRetry={refetchWaterLogs}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {isModalOpen && (
        <AddWaterModal
          isOpen
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
          editItem={editingItem}
        />
      )}

      <DeleteWaterLogModal
        item={deletingItem}
        onClose={() => setDeletingItem(null)}
      />
    </div>
  );
};
