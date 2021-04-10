import { Filters } from 'shared/entities';
import types from './types';

export const createFilters = (data: Filters) => ({
  type: types.CREATE,
  payload: data,
});

export const resetFilters = () => ({
  type: types.RESET,
});
