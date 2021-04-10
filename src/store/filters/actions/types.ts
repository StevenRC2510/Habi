import { createActionTypes } from 'utils';

export default {
  ...createActionTypes('@@FILTERS', 'CREATE'),
  ...createActionTypes('@@FILTERS', 'RESET'),
};
