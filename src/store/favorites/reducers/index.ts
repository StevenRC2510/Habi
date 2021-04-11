import { Reducer } from 'redux';

import { Favorites } from 'shared/entities';
import { initialState } from './initialState';
import types from '../actions/types';

const favoritesReducer: Reducer<Favorites, SupportedActions> = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD: {
      return { ...state, list: state.list.concat(action.payload) };
    }
    case types.REMOVE: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

export default favoritesReducer;
