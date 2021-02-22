import { action } from 'typesafe-actions';
import { Item, ItemsActionConsts, IItemsList } from './types';

export const saveList = (list: IItemsList) => action(
  ItemsActionConsts.SAVE_LIST,
  list
)