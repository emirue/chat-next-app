import { AnyAction } from 'redux';
import * as t from '../types';

const initialState = {
  item: null, // 선택된 아이템
};

const homeList = (state = initialState, action: AnyAction) => {
  if (action.type === t.SELECT_LIST_ITEM) {
    return {
      ...state,
      item: action.payload,
    };
  } else {
    return { ...state };
  }
};

export default homeList;
