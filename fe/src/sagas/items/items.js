import { all } from 'redux-saga/effects';
import { call, takeLatest } from 'typed-redux-saga';
import { GetAllItemsAPI } from '../../api/items';
import { getAllItemsAction, getAllItemsSuccess } from '../../reducers/items/items.actions';

export function* getAllItemsSaga() {
  try {
    const items = yield* call(GetAllItemsAPI);
    getAllItemsSuccess(items);
  } catch (error) {
    console.log(error);
  } finally {}
}


export function* watchItems() {
  yield all([
    takeLatest(getAllItemsAction, getAllItemsSaga),
  ]);
}
