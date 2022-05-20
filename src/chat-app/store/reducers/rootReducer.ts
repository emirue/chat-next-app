import { combineReducers } from 'redux';
import homeList from './homeList';

const rootReducer = combineReducers({
  homeList,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
