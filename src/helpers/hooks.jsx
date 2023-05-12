import { useState } from 'react';

const usePagination = (items, itemsPerPage) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const pagesNumber = Math.ceil(items.length / itemsPerPage);
  const currentPageItems = items.slice(
    itemsPerPage * (currentPageIndex), itemsPerPage * currentPageIndex + 3,
  );

  return {
    totalPages: pagesNumber,
    currentPage: currentPageIndex,
    setCurrentPage: setCurrentPageIndex,
    pageItems: currentPageItems,
  };
};

export default usePagination;
