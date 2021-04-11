import React from 'react';
import map from 'lodash/map';
import { useParams } from 'react-router';

import { WrapperPagination, PageItemStyled, LinkStyled } from './StyledPagination';

interface Props {
  itemsPerPage: number;
  totalItems: number;
  paginate: (value: number) => void;
}

export const PaginationComponent = ({ itemsPerPage, totalItems, paginate }: Props) => {
  const { page } = useParams<{ page: string }>();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  return (
    <WrapperPagination>
      <ul className='pagination'>
        {map(pageNumbers, (number, key) => (
          <PageItemStyled key={key} isActive={page === number.toString()}>
            <LinkStyled to={`/list/${number}`} onClick={() => paginate(number)} className='page-link'>
              {number}
            </LinkStyled>
          </PageItemStyled>
        ))}
      </ul>
    </WrapperPagination>
  );
};
