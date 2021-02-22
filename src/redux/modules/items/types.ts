import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export interface ItemsState {
  readonly list: IItemsList
};

export type ItemsActionTypes = ActionType<typeof actions>;

export enum ItemsActionConsts {
  SAVE_LIST = 'SAVE_LIST'
};

export interface Item {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  picture: string,
  condition: string,
  free_shipping: boolean,
  state: string,
}

export interface ItemDetail extends Item {
  description: string,
  sold_quantity: number
}

export interface IItemsList {
  categories: string[],
  items: Item[]
}
