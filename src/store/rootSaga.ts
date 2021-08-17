import { all } from 'redux-saga/effects';

import * as breeds from './breeds/saga';
import * as network from './network/saga';

const getListeners = (...args) =>
  args.reduce(
    (acc, nextArg) => [...acc, ...Object.values(nextArg).map(func => func())],
    [],
  );
export default function* rootSaga() {
  yield all(getListeners(breeds, network));
}
