export const PAGE = 1;
export const LIMIT = 10;
export const ORDER = 'asc';
export const HABI_ROUTES = {
  // home: `/?page=${}&limit${}`,
  home: '/',
  homePage: '/:page',
  apartmentDetail: '/apartment/:id',
  addApartment: '/add-apartment',
  notFound: '*',
};

export const ADD_APARTMENT_FIELDS_ERROR_MESSAGES = {
  required: 'The Field is required',
  fullName: {
    required: 'The Full Name is required',
  },
  email: {
    required: 'The Email is required',
  },
  phone: {
    required: 'The phone is required',
  },
};
