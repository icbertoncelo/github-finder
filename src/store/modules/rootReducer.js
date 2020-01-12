import { combineReducers } from 'redux';

import user from './user/reducer';
import commit from './commit/reducer';

export default combineReducers({
  user,
  commit,
});
