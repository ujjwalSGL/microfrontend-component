import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

interface UIPaginationProps {
  totalPages: number;
  href: string;
}

function UIPagination({ totalPages, href }: UIPaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  };
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      console.log(currentPage);
    }
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${href}/${currentPage - 1}`}
            onClick={handlePrevious}
          />
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href={`${href}/${currentPage}`}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          {totalPages > 5 && <PaginationEllipsis />}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`${href}/${currentPage + 1}`}
            onClick={handleNext}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default UIPagination;
