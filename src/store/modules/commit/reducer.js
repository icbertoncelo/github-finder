import produce from 'immer';

const INITIAL_STATE = {
  commits: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SEARCH_COMMIT_SUCCESS': {
        draft.commits = action.payload.data;
        break;
      }
      default:
    }
  });
}
