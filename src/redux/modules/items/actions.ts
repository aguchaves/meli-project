import { action } from 'typesafe-actions';
import { Item, ItemsActionConsts } from './types';

export const saveList = (list: Item[]) => action(
  ItemsActionConsts.SAVE_LIST,
  list
)