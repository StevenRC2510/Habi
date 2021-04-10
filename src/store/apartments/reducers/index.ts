import { Reducer } from 'redux';

import { removeArrayApartment } from 'utils';
import { LivingPlaceList as ApartmentsState } from 'shared/entities';
import { initialState } from './initialState';
import types from '../actions/types';

const apartmentsReducer: Reducer<ApartmentsState, SupportedActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH: {
      return {
        ...state,
        list: action.payload,
      };
    }
    case types.CREATE: {
      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    }
    case types.REMOVE: {
      const { apartmentId } = action.payload;
      const result = removeArrayApartment(state.list, apartmentId);
      return {
        ...state,
        list: result,
      };
    }
    default: {
      return state;
    }
  }
};

export default apartmentsReducer;
