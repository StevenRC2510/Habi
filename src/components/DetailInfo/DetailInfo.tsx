import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';

import { formatCurrency } from 'utils';
import { HABI_ROUTES } from 'shared/constants';
import { WrapperApartmentDetail } from './StyledDetailInfo';

interface Props {
  children: ReactNode;
}

export const DetailInfo = ({ children }: Props) => {
  return (
    <WrapperApartmentDetail>
      <Link to={HABI_ROUTES.home}>
        <IconButton aria-label='delete'>
          <ArrowBackIosIcon />
        </IconButton>
      </Link>

      <div>
        <h1> Beautiful Apartment</h1>
        <h3> Price: {`${formatCurrency('COP', 8000000)} COP`} </h3>
      </div>
      <div className='carousel'>{children}</div>
      <div className='info'>
        <div>
          <p>
            <strong>Area </strong>: 99mts
          </p>
          <p>
            <strong> Rooms: </strong> 8 Rooms
          </p>
          <p>
            <strong> Location: </strong> Zone - sur
          </p>
          <p>
            <strong> City: </strong> Cali
          </p>
        </div>
        <div>
          <p>
            <strong> Full name: </strong> Cali
          </p>
          <p>
            <strong> Phone: </strong> 3207678655
          </p>
          <p>
            <strong> Email: </strong> Steven25ruiz@gmail.com
          </p>
        </div>
      </div>
    </WrapperApartmentDetail>
  );
};
