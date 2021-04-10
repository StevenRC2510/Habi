import React from 'react';
import { useSelector } from 'react-redux';

import { getApartments } from 'store/apartments/reducers/selectors';
import { Home } from './Home';

export const HomeContainer = () => {
  const apartmentList = useSelector(getApartments);

  const props = {
    apartmentList,
  };

  return <Home {...props} />;
};
