import { Skeleton } from "@/components/primitives/Skeleton";

const SUMMARY_CARDS = 4;

export const StatisticsSkeleton = () => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {Array.from({ length: SUMMARY_CARDS }, (_, index) => (
        <Skeleton key={index} className="h-40" />
      ))}
    </div>
    <Skeleton className="h-96" />
  </>
);
