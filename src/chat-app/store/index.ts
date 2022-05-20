import { combineReducers } from 'redux';
import homeList from './reducers/homeList';

const rootReducer = combineReducers({
  homeList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
