import { all } from 'redux-saga/effects';

import user from './user/sagas';
import commit from './commit/sagas';

export default function* rootSaga() {
  yield all([user, commit]);
}
