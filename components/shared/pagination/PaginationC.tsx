import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const PaginationC = ({ totalJobs, jobsPerPage }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // const totalJobs = 200; // Update this with your actual total job count

  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  const handlePageClick = (page: any) => {
    const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form
    current.set('page', page);
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
    setCurrentPage(page);
  };

  const getPageNumbers = () => {
    const pagesToShow = 3; // Number of page numbers to show before and after current page
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    if (endPage - startPage < pagesToShow - 1) {
      startPage = Math.max(1, endPage - pagesToShow + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" onClick={() => handlePageClick(1)}>
            1
          </PaginationLink>
        </PaginationItem>,
      );
      if (startPage > 2) {
        pageNumbers.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i}
            href="#"
            onClick={() => handlePageClick(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }
      pageNumbers.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" onClick={() => handlePageClick(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Pagination className="mt-10 flex flex-wrap items-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={`${currentPage <= 1 ? 'text-blue-midnight_blue/60 pointer-events-none' : 'text-blue-midnight_blue'} `}
              href="#"
              onClick={() => handlePageClick(currentPage - 1)}
            />
          </PaginationItem>
          {getPageNumbers()}
          <PaginationItem>
            <PaginationNext
              className={`${currentPage >= totalPages ? 'text-blue-midnight_blue/60 pointer-events-none' : 'text-blue-midnight_blue'} `}
              href="#"
              onClick={() => handlePageClick(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="mt-2">
        Showing {(currentPage - 1) * jobsPerPage + 1} to{' '}
        {Math.min(currentPage * jobsPerPage, totalJobs)} of {totalJobs} jobs
      </div>
    </div>
  );
};

export default PaginationC;
