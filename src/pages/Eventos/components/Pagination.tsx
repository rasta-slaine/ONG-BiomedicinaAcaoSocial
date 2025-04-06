import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  className?: string;
  maxPageButtons?: number;
}

export function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  className,
  maxPageButtons = 5,
}: PaginationProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setIsLoading(true);
      setCurrentPage(page);
    }
  };

  // Reset loading state after page change
  useEffect(() => {
    if (isLoading) {
      // Simulate loading time (remove this in production and rely on actual data fetching)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentPage, isLoading]);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];

    // If few pages, show all
    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }

    // Always show first page
    pageNumbers.push(1);

    // Calculate start and end of page buttons around current page
    let startPage = Math.max(2, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxPageButtons - 3);

    // Adjust if we're near the start
    if (startPage === 2) {
      endPage = Math.min(totalPages - 1, maxPageButtons - 1);
    }

    // Adjust if we're near the end
    if (
      endPage === totalPages - 1 &&
      endPage - startPage < maxPageButtons - 3
    ) {
      startPage = Math.max(2, totalPages - maxPageButtons + 2);
    }

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageNumbers.push("ellipsis-start");
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push("ellipsis-end");
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  // If there's only one page, don't render pagination
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = getPageNumbers();

  return (
    <div className={cn("mt-8 flex justify-center items-center", className)}>
      {isLoading && (
        <div className="fixed inset-0 bg-background/80 flex items-center justify-center z-50">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      )}

      <nav className="flex items-center space-x-1" aria-label="Pagination">
        {/* Previous button */}
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Page numbers */}
        <div className="flex space-x-1">
          {pageNumbers.map((page, index) => {
            if (page === "ellipsis-start" || page === "ellipsis-end") {
              return (
                <div
                  key={`${page}-${index}`}
                  className="flex h-9 w-9 items-center justify-center"
                >
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </div>
              );
            }

            return (
              <Button
                key={`page-${page}`}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                className={cn(
                  "h-9 w-9",
                  page === currentPage ? "pointer-events-none" : ""
                )}
                onClick={() => handlePageChange(page as number)}
                disabled={isLoading}
                aria-current={page === currentPage ? "page" : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </Button>
            );
          })}
        </div>

        {/* Next button */}
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || isLoading}
          aria-label="Go to next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </nav>
    </div>
  );
}
