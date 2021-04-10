import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import map from 'lodash/map';

import Filters from 'components/Filters';
import ApartmentList from 'components/ApartmentList';
import PaginationComponent from 'components/Pagination';
import { fetchApartments } from 'store/apartments/actions';
// import { usePagination } from 'hooks/usePagination';
import { LivingPlace } from 'shared/entities';
import { data } from './data';

interface Props {
  apartmentList: LivingPlace[];
}

const HomePage = ({ apartmentList }: Props) => {
  const dispatch = useDispatch();
  // const { currentItems, setCurrentPage } = usePagination(apartmentList, 1, 10);
  // console.log(currentItems, 'CURREN');

  useEffect(() => {
    if (apartmentList.length <= 0) dispatch(fetchApartments(data));
  }, [dispatch, apartmentList]);

  const paginate = (page: number) => {
    // setCurrentPage(page);
    return page;
  };

  return (
    <>
      <Filters />
      <div style={{ height: '76.3vh', overflowY: 'auto' }}>
        {map(apartmentList, (rest, key) => (
          <ApartmentList {...rest} key={key} />
        ))}
      </div>
      <div style={{ margin: '30px 0px' }}>
        <PaginationComponent itemsPerPage={10} totalItems={apartmentList.length} paginate={paginate} />
      </div>
    </>
  );
};

export const Home = memo(HomePage, (prevProps, props) => prevProps.apartmentList === props.apartmentList);
