import { useState } from 'react';

import { Apartment } from 'shared/entities';

export const usePagination = (items: Apartment[], currentPageParam: number, perPageParam: number) => {
  const [currentPage, setCurrentPage] = useState<number>(currentPageParam);
  const [itemsPerPage] = useState<number>(perPageParam);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return { currentItems, setCurrentPage };
};
