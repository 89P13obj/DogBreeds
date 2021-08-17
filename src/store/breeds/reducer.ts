import { SAVE, UPDATE_IMAGE } from './constants';

import { BreedItem, IBreed } from '../../models/IBreed';

export interface IBreedState extends IBreed {}

const defaultState: IBreedState = {
  list: [],
};

export default function breedsReducer(
  state: IBreedState = defaultState,
  action = { type: '', payload: {} },
) {
  const { payload, type } = action;
  switch (type) {
    case SAVE:
      const list = state.list.find(item => item.id === payload.id)
        ? state.list.map(item => (item.id === payload.id ? payload : item))
        : [...state.list, payload];
      return {
        ...state,
        list,
      };
    case UPDATE_IMAGE:
      const { id, image } = payload;
      const updateList = state.list.find(item => item.id == id)
        ? state.list.map(item => (item.id == id ? { ...item, image } : item))
        : [...state.list];

      return {
        ...state,
        list: updateList,
      };
    default:
      return state;
  }
}
