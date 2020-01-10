import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';

import api from '~/services/api';

import { searchUserSuccess, searchUserFailure } from './actions';

export function* searchUser({ payload }) {
  try {
    const { username } = payload;

    const { data } = yield call(api.get, `users/${username}/repos`);

    // toast.success('Profile updated successfully');

    yield put(searchUserSuccess(data));
  } catch (err) {
    // toast.error('Unable to update profile. Please check your data');

    yield put(searchUserFailure());
  }
}

export default all([takeLatest('@user/SEARCH_USER_REQUEST', searchUser)]);
