import { HABI_ROUTES } from 'shared/constants';
import { colors } from 'styles';

export interface SideBarI {
  id: number | string;
  name: string;
  route: string;
  type: string;
  background: string;
  color: string;
}
export const menuOptions: SideBarI[] = [
  { id: 1, name: 'Apartment List', route: HABI_ROUTES.home, type: 'new', background: colors.green_success, color: colors.white },
  { id: 2, name: 'Add Apartment', route: HABI_ROUTES.addApartment, type: 'special', background: colors.blue_main, color: colors.white },
  { id: 3, name: 'Delete Apartment', route: HABI_ROUTES.notFound, type: '', background: colors.yellow_warning, color: colors.white },
  { id: 4, name: 'Coming Soon 1', route: HABI_ROUTES.notFound, type: '', background: colors.yellow_warning, color: colors.white },
  { id: 5, name: 'Coming Soon 2', route: HABI_ROUTES.notFound, type: '', background: colors.yellow_warning, color: colors.white },
  { id: 6, name: 'Coming Soon 3', route: HABI_ROUTES.notFound, type: '', background: colors.yellow_warning, color: colors.white },
];
