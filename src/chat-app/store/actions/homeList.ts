import * as t from '../types';
import { IfcHomeListItem } from '../../components/home/IfcHomeListItem';

export const selectListItem = (item: IfcHomeListItem) => (dispatch: any) => {
  dispatch({
    type: t.SELECT_LIST_ITEM,
    payload: item,
  });
};
