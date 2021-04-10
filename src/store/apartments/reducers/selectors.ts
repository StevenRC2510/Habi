import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.apartments;
};

const getApartments = compose(apartmentListState => {
  return apartmentListState.list;
}, rootState);

const getApartmentById = compose(apartmentListState => {
  return apartmentListState.list;
}, rootState);

export { getApartments, getApartmentById };
