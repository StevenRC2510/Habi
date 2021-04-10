import { LivingPlace } from 'shared/entities';
import types from './types';

export const fetchApartments = (data: LivingPlace[]) => ({
  type: types.FETCH,
  payload: data,
});

export const createApartment = (data: LivingPlace[]) => ({
  type: types.CREATE,
  payload: data,
});

export const removeApartment = (livingPlaceId: string, apartmentId: string) => ({
  type: types.REMOVE,
  payload: { livingPlaceId, apartmentId },
});
