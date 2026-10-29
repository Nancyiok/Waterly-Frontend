import { BasePanel } from "@/components/primitives/BasePanel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { WaterLogs } from "@/components/features/Home/DailyProgressBanner/WaterLogList/WaterLogs";
import { WaterLogsSkeleton } from "@/components/features/Home/DailyProgressBanner/WaterLogList/WaterLogsSkeleton";
import { WaterLogEmpty } from "@/components/features/Home/DailyProgressBanner/WaterLogList/WaterLogEmpty";
import { Pagination } from "@/components/primitives/Pagination";
import { ErrorState } from "@/components/primitives/ErrorState";
import { useDayWaterIntakes } from "@/hooks/useWaterIntake";
import { HISTORY_TEXTS } from "@/constants/texts/history";
import { formatDate } from "@/utils/formatDate";
import { DATE_FORMATS } from "@/constants/dateFormats";
import { DEBOUNCE_DELAYS } from "@/constants/debounceDelays";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";

type Props = {
  day: Date;
  page: number;
};

export const IntakeRecords = ({ day, page }: Props) => {
  const debouncedDayTime = useDebouncedValue(day.getTime(), DEBOUNCE_DELAYS.historyDay);
  const query = useDayWaterIntakes(new Date(debouncedDayTime), page);
  const { data, isError, refetch } = query;
  const isLoading = query.isLoading || debouncedDayTime !== day.getTime();
  const records = data?.data ?? [];
  const { total = 0, limit = 1 } = data?.pagination ?? {};
  const totalMl = data?.meta?.totalMl ?? 0;

  return (
    <BasePanel>
      <SectionHeading
        title={formatDate(day, DATE_FORMATS.fullWeekDayDayFullMonth)}
        description={HISTORY_TEXTS.entriesSummary(totalMl, total)}
      />

      {isLoading && <WaterLogsSkeleton />}

      {isError && <ErrorState onRetry={refetch} />}

      {!isLoading && !isError && records.length === 0 && (
        <WaterLogEmpty
          title={HISTORY_TEXTS.emptyDayTitle}
          description={HISTORY_TEXTS.emptyDescription}
        />
      )}

      {!isLoading && records.length > 0 && (
        <WaterLogs waterLogs={records} />
      )}

      <Pagination total={total} limit={limit} className="mt-6" />
    </BasePanel>
  );
};
