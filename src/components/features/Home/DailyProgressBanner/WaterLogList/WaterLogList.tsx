import { BasePanel } from "@/components/primitives/BasePanel";
import { Pagination } from "@/components/primitives/Pagination";
import { type WaterLogItem } from "../../constants";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { WaterLogEmpty } from "./WaterLogEmpty";
import { WaterLogs } from "./WaterLogs";
import { WaterLogsSkeleton } from "./WaterLogsSkeleton";
import { ErrorState } from "@/components/primitives/ErrorState";
import { HOME_TEXTS } from "@/constants/texts/home";
import { type PaginatedApiResponse } from "@/services/http/http.service";

export type WaterLogListProps = {
  waterLogs?: PaginatedApiResponse<WaterLogItem> | null;
  isLoading: boolean;
  isError: boolean;
  onRetry: () => void;
  onEdit: (item: WaterLogItem) => void;
  onDelete: (id: number) => void;
};

export const WaterLogList = ({
  waterLogs,
  isLoading,
  isError,
  onRetry,
  onEdit,
  onDelete,
}: WaterLogListProps) => {

  const waterLogsData = waterLogs?.data;

  const isListEmpty = waterLogsData?.length === 0;

  const { total = 0, limit = 1 } = waterLogs?.pagination ?? {};

  return (
    <BasePanel>
      <SectionHeading
        title={HOME_TEXTS.waterLog.title}
        description={HOME_TEXTS.waterLog.entriesRecorded(total)}
      />

      {isLoading && <WaterLogsSkeleton />}

      {isError && <ErrorState onRetry={onRetry} />}

      {isListEmpty ? (
        <WaterLogEmpty />
      ) : (
        <WaterLogs
          waterLogs={waterLogsData}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}

      <Pagination total={total} limit={limit} className="mt-6" />
    </BasePanel>
  );
};
