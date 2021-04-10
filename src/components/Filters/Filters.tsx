import React, { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { TextField, MenuItem, Button } from '@material-ui/core';

import { createFilters, resetFilters as resetFiltersAction } from 'store/filters/actions';
import { Filters as FiltersI } from 'shared/entities';
import { WrapperFilters } from './StyledFilters';

const locations = [
  {
    value: 'sur',
    label: 'Zone Sur',
  },
  {
    value: 'north',
    label: 'Zone North',
  },
  {
    value: 'east',
    label: 'Zone East',
  },
  {
    value: 'west',
    label: 'Zone West',
  },
];

const defaultValues = {
  date: '',
  location: '',
};

export const Filters = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({ defaultValues });

  const onSubmit = useCallback(
    (data: FiltersI) => {
      dispatch(createFilters(data));
    },
    [dispatch],
  );

  const resetFilters = () => {
    dispatch(resetFiltersAction());
  };

  return (
    <WrapperFilters>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='wrapper-fields'>
          <Controller
            control={control}
            name='date'
            render={({ field: { onChange } }) => <input type='date' id='start' onChange={onChange} name='trip-start' />}
          />

          <Controller
            control={control}
            name='location'
            render={({ field: { onChange } }) => (
              <TextField id='standard-select-currency' select label='Select' onChange={onChange}>
                {locations.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Button type='submit' variant='contained' className='btn-search'>
            Search
          </Button>
          <Button variant='contained' className='btn-search' onClick={resetFilters}>
            Reset
          </Button>
        </div>
      </form>
    </WrapperFilters>
  );
};
