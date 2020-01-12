import { takeLatest, call, put, all } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import { searchCommitsSuccess, searchCommitsFailure } from './actions';

export function* searchCommits({ payload }) {
  try {
    const { repository, owner } = payload;

    const { data } = yield call(
      api.get,
      `repos/${owner}/${repository}/commits`
    );

    // toast.success('Profile updated successfully');

    yield put(searchCommitsSuccess(data));
    history.push('/commits');
  } catch (err) {
    // toast.error('Unable to update profile. Please check your data');

    yield put(searchCommitsFailure());
  }
}

export default all([takeLatest('@user/SEARCH_COMMIT_REQUEST', searchCommits)]);
