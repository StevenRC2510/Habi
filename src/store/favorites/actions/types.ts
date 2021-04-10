import { createActionTypes } from 'utils';

export default {
  ...createActionTypes('@@FAVORITES', 'ADD'),
  ...createActionTypes('@@FAVORITES', 'REMOVE'),
};
