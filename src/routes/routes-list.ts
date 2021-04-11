import { lazy } from 'react';

import { HABI_ROUTES } from 'shared/constants';

const Home = lazy(() => import('scenes/Home'));
const AddApartment = lazy(() => import('scenes/AddApartment'));
const ApartmentDetail = lazy(() => import('scenes/ApartmentDetail'));
const NotFound = lazy(() => import('scenes/NotFound'));

export const routes: Array<RoutesCustom> = [
  {
    exact: true,
    path: HABI_ROUTES.home,
    component: Home,
  },
  {
    exact: true,
    path: HABI_ROUTES.homeList,
    component: Home,
  },
  {
    exact: true,
    path: HABI_ROUTES.addApartment,
    component: AddApartment,
  },
  {
    exact: true,
    path: HABI_ROUTES.apartmentDetail,
    component: ApartmentDetail,
  },
  {
    exact: false,
    path: HABI_ROUTES.notFound,
    component: NotFound,
  },
];
