import { Reducer } from 'redux';

import { Filters as FiltersState } from 'shared/entities';
import { initialState } from './initialState';
import types from '../actions/types';

const filtersReducer: Reducer<FiltersState, SupportedActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE: {
      return action.payload;
    }
    case types.RESET: {
      return { ...state, ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default filtersReducer;
