import { TableRowSkeleton } from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <div className="w-full">
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100"></div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <div className="h-8 w-full rounded-md bg-gray-100"></div>
      </div>
      <TableRowSkeleton />
    </div>
  );
}