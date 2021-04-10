import React, { useCallback, FC } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import { Button, TextField, Grid } from '@material-ui/core';

import { createApartment } from 'store/apartments/actions';
import { ADD_APARTMENT_FIELDS_ERROR_MESSAGES } from 'shared/constants';
import { generateDataWithUuid } from 'utils';
import { LivingPlace } from 'shared/entities';
import ApartmentForm from './ApartmentForm';
import { WrapperForm } from './StyledForm';

const defaultValues = {
  _id: '',
  owner: {
    _id: '',
    fullName: '',
    phone: '',
    email: '',
  },
  apartments: [
    {
      city: '',
      area: '',
      rooms: '',
      price: 0,
      address: '',
      location: '',
    },
  ],
};

export const FormAddApartment: FC = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = useCallback(
    (data: LivingPlace) => {
      const newData = {
        ...data,
        _id: uuidv4(),
        owner: {
          ...data.owner,
          _id: uuidv4(),
        },
        apartments: generateDataWithUuid(data.apartments),
      };
      dispatch(createApartment([newData]));
      window.alert('Apartment Created Successful');
    },
    [dispatch],
  );

  return (
    <WrapperForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2> Owner info</h2>
        <div className='wrapper-fields'>
          <Controller
            control={control}
            name='owner.fullName'
            rules={{
              required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.fullName.required,
            }}
            render={({ field: { onChange } }) => <TextField onChange={onChange} label='Full Name' variant='filled' />}
          />
          {/* {errors.fullName && errors.fullName.message } */}
          <Controller
            control={control}
            name='owner.phone'
            rules={{
              required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.phone.required,
            }}
            render={({ field: { onChange } }) => <TextField onChange={onChange} type='number' label='Phone' variant='filled' />}
          />
          {/* {errors.phone && errors.phone.message} */}
          <Controller
            control={control}
            name='owner.email'
            rules={{
              required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.email.required,
            }}
            render={({ field: { onChange } }) => <TextField onChange={onChange} label='Email' variant='filled' />}
          />
          {/* {errors.email && errors.email.message} */}
        </div>
        <h2> Apartments </h2>
        <ApartmentForm {...{ control, defaultValues }} />
        <Grid container justify='center' alignItems='center'>
          <Button type='submit' variant='contained' className='btn-add-list'>
            ADD TO LIST
          </Button>
        </Grid>
      </form>
    </WrapperForm>
  );
};
