import { STATISTICS_TEXTS } from "@/constants/texts/statistics";
type Props = {
  percentage: number;
  goalDays: number;
  totalDays: number;
};

export const GoalCompletionLabel = ({ percentage, goalDays, totalDays }: Props) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
    <span className="text-4xl font-extrabold text-primary-dark">{percentage}%</span>
    <span className="mt-1">
      {STATISTICS_TEXTS.goalCompletion.daysOf(goalDays, totalDays)}
    </span>
  </div>
);
 