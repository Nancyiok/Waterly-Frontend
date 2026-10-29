import { BasePanel } from "@/components/primitives/BasePanel";
import { Calendar } from "@/components/primitives/Calendar";
import { PageHeader } from "@/components/primitives/PageHeader";
import { IntakeRecords } from "./IntakeRecords";
import { fromDateParam, toDateParam } from "./utils";
import { HISTORY_TEXTS } from "@/constants/texts/history";
import { useSearchParamsManager } from "@/hooks/useSearchParamsManager";

export const History = () => {
  const { params, setParams } = useSearchParamsManager();
  const today = new Date();
  const day = fromDateParam(params.day) ?? today;
  const page = Number(params.page) || 0;

  const handleDaySelect = (day: Date) => {
    setParams({ day: toDateParam(day), page: null });
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in duration-300">
      <PageHeader title={HISTORY_TEXTS.title} description={HISTORY_TEXTS.description} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <BasePanel className="lg:col-span-5">
          <Calendar
            mode="single"
            required
            selected={day}
            onSelect={handleDaySelect}
            defaultMonth={day}
            disabled={{ after: today }}
          />
        </BasePanel>

        <div className="lg:col-span-7">
          <IntakeRecords day={day} page={page} />
        </div>
      </div>
    </div>
  );
};
