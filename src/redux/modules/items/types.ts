import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface ItemsState {
  readonly list: Item[]
};

export type ItemsActionTypes = ActionType<typeof actions>;

export enum ItemsActionConsts {
  SAVE_LIST = 'SAVE_LIST'
};

export interface Item {
  id: string,
  title: string,
  price: number
}
