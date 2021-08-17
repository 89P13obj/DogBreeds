import { ADD_TO_QUEUE, CLEAR_QUEUE, EXECUTE } from './constants';

import { QueueType } from '../../models/INetwork';

export const addToQueue = (type: QueueType, action: any) => ({
  type: ADD_TO_QUEUE,
  payload: {
    type,
    action,
  },
});

export const clearQueue = (type: QueueType) => ({
  type: CLEAR_QUEUE,
  payload: {
    type,
  },
});

export const executeQueue = (type: QueueType) => ({
  type: EXECUTE,
  payload: {
    type,
  },
});
