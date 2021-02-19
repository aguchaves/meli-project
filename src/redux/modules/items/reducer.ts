import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';
import { ItemsActionConsts, ItemsActionTypes, ItemsState } from './types';

const initialState: ItemsState = {
  list: []
}

export const itemsReducer: Reducer<ItemsState, ItemsActionTypes> = (state = initialState, action): ItemsState => {
  switch (action.type) {
    case ItemsActionConsts.SAVE_LIST:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}
