import { combineReducers } from 'redux';

import { rootReducer as apartmentsReducer } from './apartments';
import { rootReducer as filtersReducer } from './filters';
import { rootReducer as favoritesReducer } from './favorites';

export const AppReducers = () =>
  combineReducers({
    apartments: apartmentsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  });
