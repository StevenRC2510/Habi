import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.favorites;
};

const getFavorites = compose(favoritesState => {
  return favoritesState.list;
}, rootState);

export { getFavorites };
