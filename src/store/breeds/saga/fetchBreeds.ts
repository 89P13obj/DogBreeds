import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Saga } from 'redux-saga';

import { fetchBreeds, save } from '../actions';
import { methods } from '../../../libs/api';
import { FETCH_BREEDS } from '../constants';
import { addToQueue } from '../../network/action';
import { QueueType } from '../../../models/INetwork';
import { BreedItem } from '../../../models/IBreed';
import { prepareBreed } from '../../../helpers/some-helpers';

function* fetchBreedsSaga(): Generator<any, any, any> {
  try {
    const dataBreeds = yield call(methods.fetchBreeds);
    const breeds = yield all(
      dataBreeds.map((item: any) => prepareBreed(item)) as BreedItem[],
    );
    for (const breed of breeds) {
      yield put(save(breed));
    }
  } catch (e) {
    console.warn(e);
    yield put(addToQueue(QueueType.get, fetchBreeds()));
  }
}

export default function* listener(): Generator<any, any, any> {
  yield takeLatest(FETCH_BREEDS, fetchBreedsSaga);
}
