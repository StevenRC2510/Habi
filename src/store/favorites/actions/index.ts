import { Apartment } from 'shared/entities';
import types from './types';

export const addFavorite = (data: Apartment) => ({
  type: types.ADD,
  payload: data,
});

export const removeFavorite = (id: string) => ({
  type: types.REMOVE,
  payload: id,
});
