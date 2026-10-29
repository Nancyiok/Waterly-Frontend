import { useNavigate } from "react-router";
import MetricCard from "./MetricCard";
import { HOME_TEXTS } from "@/constants/texts/home";
import { ROUTES_PATH } from "@/routes/routes.constants";
import { formatDate } from "@/utils/formatDate";
import { DATE_FORMATS } from "@/constants/dateFormats";

type Props = {
  remainingMl: number;
  weeklyAverageMl: number;
  nextReminderAt: string | null;
};

export const QuickStatsCards = ({
  remainingMl,
  weeklyAverageMl,
  nextReminderAt,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <MetricCard
        title={HOME_TEXTS.metrics.remaining}
        icon="mdi:water-outline"
        iconClassName="text-primary"
        value={remainingMl}
        unit="ml"
        hoverable
        onClick={() => navigate(`${ROUTES_PATH.SETTINGS}?tab=goal`)}
        description={remainingMl === 0 ? HOME_TEXTS.metrics.remainingDone : HOME_TEXTS.metrics.remainingInProgress}
      />

      <MetricCard
        title={HOME_TEXTS.metrics.weeklyAverage}
        icon="lucide:trending-up"
        iconClassName="text-success"
        value={weeklyAverageMl}
        unit="ml"
        hoverable
        onClick={() => navigate(ROUTES_PATH.STATISTICS)}
        description={HOME_TEXTS.metrics.weeklyAverageDescription}
      />

      <MetricCard
        title={HOME_TEXTS.metrics.nextReminder}
        icon="lucide:clock"
        iconClassName="text-warning"
        value={
          nextReminderAt
            ? formatDate(nextReminderAt, DATE_FORMATS.time)
            : HOME_TEXTS.metrics.remindersOff
        }
        hoverable
        onClick={() => navigate(`${ROUTES_PATH.SETTINGS}?tab=reminders`)}
        description={
          nextReminderAt
            ? HOME_TEXTS.metrics.nextReminderDescription
            : HOME_TEXTS.metrics.remindersOffDescription
        }
      />
    </div>
  );
};
