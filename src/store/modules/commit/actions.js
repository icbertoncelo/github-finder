export function searchCommitsRequest(repository, owner) {
  return {
    type: '@user/SEARCH_COMMIT_REQUEST',
    payload: { repository, owner },
  };
}

export function searchCommitsSuccess(data) {
  return {
    type: '@user/SEARCH_COMMIT_SUCCESS',
    payload: { data },
  };
}

export function searchCommitsFailure() {
  return {
    type: '@user/SEARCH_COMMIT_FAILURE',
  };
}
