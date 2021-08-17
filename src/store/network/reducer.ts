import { ADD_TO_QUEUE, CLEAR_QUEUE } from './constants';

import { INetwork } from '../../models/INetwork';

export interface INetworkState extends INetwork {}

const defaultState: INetworkState = {
  post: [],
  get: [],
};

export default function networkReducer(
  state: INetworkState = defaultState,
  action = { type: '', payload: {} },
) {
  const { payload } = action;
  switch (action.type) {
    case ADD_TO_QUEUE: {
      return {
        ...state,
        [payload.type]: [...state[payload.type], payload.action],
      };
    }
    case CLEAR_QUEUE: {
      return {
        ...state,
        [payload.type]: [],
      };
    }
    default:
      return state;
  }
}
