import { put, select, takeLatest } from 'redux-saga/effects';
import { IRootState } from '../../rootReducer';
import { EXECUTE } from '../constants';
import { clearQueue } from '../action';

interface IAction {
  type: string;
  payload: any;
}

function* executeSaga({ payload }: IAction): Generator<any, any, any> {
  const { type } = payload;
  try {
    const network = yield select((state: IRootState) => state.network);
    const list = network[type];

    yield put(clearQueue(type));
    for (const action of list) {
      yield put(action);
    }
  } catch (e) {
    console.warn(e);
  }
}

export default function* listener(): Generator<any, any, any> {
  yield takeLatest(EXECUTE, executeSaga);
}
