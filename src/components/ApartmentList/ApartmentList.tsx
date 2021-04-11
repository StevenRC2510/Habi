/* eslint no-return-assign: "error" */

import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import map from 'lodash/map';

// import { usePagination } from 'hooks/usePagination';
import { getFilters } from 'store/filters/reducer/selectors';
import Apartment from 'components/Apartment';
import OwnerInfo from 'components/OwnerInfo';
import { LivingPlace } from 'shared/entities';
import { WrapperApartmentList } from './StyledApartmentList';

export const ApartmentList = ({ owner, apartments, _id: livingPlaceId }: LivingPlace) => {
  const { location, date } = useSelector(getFilters);
  // const { currentItems, setCurrentPage } = usePagination(apartments, 1, 10);
  // const { currentItems } = usePagination(apartments, 1, 5);
  // console.log(currentItems, 'curr');

  const filteredApartments = useMemo(
    () =>
      apartments.filter(apartment => {
        const bothFilters = apartment.location.toLowerCase().includes(location.toLowerCase()) && apartment.date.includes(date);
        const locationFilter = apartment.location.toLowerCase().includes(location.toLowerCase());
        const dateFilter = apartment.date.includes(date);
        if (location && date) {
          return bothFilters;
        }
        if (location) {
          return locationFilter;
        }
        return dateFilter;
      }),
    [location, date, apartments],
  );
  return (
    <WrapperApartmentList>
      {map(filteredApartments, (apartment, key) => (
        <div className='apartment' key={key}>
          <Apartment apartment={apartment} livingPlaceId={livingPlaceId}>
            <OwnerInfo {...owner} />
          </Apartment>
        </div>
      ))}
    </WrapperApartmentList>
  );
};
