import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.filters;
};

const getFilters = compose(filtersState => {
  return filtersState;
}, rootState);

export { getFilters };
