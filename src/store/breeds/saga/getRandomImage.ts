import { all, call, put, takeEvery } from 'redux-saga/effects';
import { Saga } from 'redux-saga';

import { getRandomImage, save, updateImage } from '../actions';
import { methods } from '../../../libs/api';
import { addToQueue } from '../../network/action';
import { QueueType } from '../../../models/INetwork';
import { GET_RANDOM_IMAGE } from '../constants';
import { prepareImage } from '../../../helpers/some-helpers';

interface IAction {
  payload: string;
}

function* getRandomImageSaga({ payload }: IAction): Generator<any, any, any> {
  try {
    const data = yield call(methods.randomImage, {}, payload);
    const image = yield all(data.map((item: any) => prepareImage(item))[0]);

    yield put(updateImage(image, payload));
  } catch (e) {
    console.warn(e);
    yield put(addToQueue(QueueType.get, getRandomImage(payload)));
  }
}

export default function* listener(): Generator<any, any, any> {
  yield takeEvery(GET_RANDOM_IMAGE, getRandomImageSaga);
}
