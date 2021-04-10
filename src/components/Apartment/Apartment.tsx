import React, { ReactNode, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Card, IconButton, Grid, Button } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';

import { removeApartment } from 'store/apartments/actions';
import { addFavorite } from 'store/favorites/actions';
import { Apartment as ApartmentInterface } from 'shared/entities';
import { formatCurrency } from 'utils';
import { WrapperApartment, LinkStyled } from './StyledApartment';

interface Props {
  children: ReactNode;
  apartment: ApartmentInterface;
  livingPlaceId: string;
}

export const Apartment = ({ apartment, livingPlaceId, children }: Props) => {
  const dispatch = useDispatch();
  const { _id: id, area, rooms, price, address, city, location } = apartment;

  const handleRemoveApartment = useCallback(() => {
    dispatch(removeApartment(livingPlaceId, id));
  }, [dispatch, livingPlaceId, id]);

  const addFavoriteList = useCallback(() => {
    dispatch(addFavorite(apartment));
  }, [dispatch, apartment]);

  return (
    <WrapperApartment id={id}>
      <Card>
        <div className='grid'>
          <div>
            <img className='apartment-image' src='https://habi.co/habi-logo-1200x630.png' alt='apartment-1' />
          </div>
          <div>
            <h3>
              Apartment in {city}- {address}
            </h3>
            <p>
              <strong> Location</strong> Zone - {location}
            </p>
            {children}
          </div>
          <Grid container justify='center' alignItems='center' direction='column'>
            <p>
              {area}
              <strong> Mts </strong>
            </p>
            <p>
              {rooms} <strong> Rooms </strong>
            </p>
          </Grid>
          <Grid container justify='center' alignItems='center' direction='column'>
            <p>
              <strong> {`${formatCurrency('COP', price)} COP`} </strong>
            </p>
            <div>
              <IconButton aria-label='favorite' color='primary' onClick={addFavoriteList}>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton aria-label='delete' color='secondary' onClick={handleRemoveApartment}>
                <DeleteIcon />
              </IconButton>
            </div>
            <LinkStyled to={`apartment/${id}`}>
              <Button className='btn-detail'> Detail </Button>
            </LinkStyled>
          </Grid>
        </div>
      </Card>
    </WrapperApartment>
  );
};
