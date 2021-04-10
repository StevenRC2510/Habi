import { createActionTypes } from 'utils';

export default {
  ...createActionTypes('@@APARTMENT_LIST', 'FETCH'),
  ...createActionTypes('@@APARTMENT_LIST', 'CREATE'),
  ...createActionTypes('@@APARTMENT_LIST', 'REMOVE'),
};
