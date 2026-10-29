import { Skeleton } from "@/components/primitives/Skeleton";

const SKELETON_ROWS = 6;

export const WaterLogsSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {Array.from({ length: SKELETON_ROWS }, (_, index) => (
      <Skeleton key={index} className="h-16" />
    ))}
  </div>
);
