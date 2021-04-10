import React from 'react';
import { useFieldArray, Controller } from 'react-hook-form';
import map from 'lodash/map';

import { TextField, Button } from '@material-ui/core';
import { Dictionary } from 'shared/entities';

import { ADD_APARTMENT_FIELDS_ERROR_MESSAGES } from 'shared/constants';

export default function ApartmentForm({ control }: Dictionary) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'apartments',
  });

  return (
    <>
      {map(fields, (item: Dictionary, key) => {
        return (
          <div key={key}>
            <div className='wrapper-fields'>
              <Controller
                control={control}
                name={`apartments[${key}].city`}
                defaultValue={item.city}
                rules={{
                  required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.required,
                }}
                render={({ field: { onChange } }) => <TextField onChange={onChange} label='City' variant='filled' />}
              />
              <Controller
                control={control}
                name={`apartments[${key}].area`}
                defaultValue={item.area}
                rules={{
                  required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.required,
                }}
                render={({ field: { onChange } }) => <TextField onChange={onChange} label='Area' variant='filled' />}
              />

              <Controller
                control={control}
                name={`apartments[${key}].rooms`}
                defaultValue={item.rooms}
                rules={{
                  required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.required,
                }}
                render={({ field: { onChange } }) => <TextField onChange={onChange} label='Rooms' variant='filled' />}
              />

              <Controller
                control={control}
                name={`apartments[${key}].price`}
                defaultValue={item.price}
                rules={{
                  required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.required,
                }}
                render={({ field: { onChange } }) => <TextField onChange={onChange} type='number' label='Price' variant='filled' />}
              />

              <Controller
                control={control}
                name={`apartments[${key}].address`}
                defaultValue={item.address}
                rules={{
                  required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.required,
                }}
                render={({ field: { onChange } }) => <TextField onChange={onChange} label='Address' variant='filled' />}
              />

              <Controller
                control={control}
                name={`apartments[${key}].location`}
                defaultValue={item.location}
                rules={{
                  required: ADD_APARTMENT_FIELDS_ERROR_MESSAGES.required,
                }}
                render={({ field: { onChange } }) => <TextField onChange={onChange} label='Location' variant='filled' />}
              />
            </div>
            <div className='wrapper-btn-delete'>
              <Button type='button' variant='contained' className='btn-delete' onClick={() => remove(key)}>
                Delete
              </Button>
            </div>
          </div>
        );
      })}

      <Button
        type='button'
        variant='contained'
        className='btn-add'
        onClick={() => {
          append({});
        }}>
        Add Apartment
      </Button>
    </>
  );
}
