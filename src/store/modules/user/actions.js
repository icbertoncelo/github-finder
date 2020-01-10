export function searchUserRequest(username) {
  return {
    type: '@user/SEARCH_USER_REQUEST',
    payload: { username },
  };
}

export function searchUserSuccess(data) {
  return {
    type: '@user/SEARCH_USER_SUCCESS',
    payload: { data },
  };
}

export function searchUserFailure() {
  return {
    type: '@user/SEARCH_USER_FAILURE',
  };
}
