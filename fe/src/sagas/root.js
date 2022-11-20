import { all, fork } from 'redux-saga/effects';
import { watchItems } from './items/items';

export default function* rootSaga() {
  yield all([
    fork(watchItems),
  ]);
}