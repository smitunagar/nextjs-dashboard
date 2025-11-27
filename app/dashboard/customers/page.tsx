import { Lusitana } from 'next/font/google';
import Search from '@/app/ui/search';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
}