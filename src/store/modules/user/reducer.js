import produce from 'immer';

const INITIAL_STATE = {
  repositories: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@user/SEARCH_USER_SUCCESS': {
        draft.repositories = action.payload.data;
        break;
      }
      default:
    }
  });
}
