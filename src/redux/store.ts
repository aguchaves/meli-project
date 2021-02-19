import { combineReducers, createStore, Action } from 'redux';

import { itemsReducer, ItemsActionTypes, ItemsState } from './modules/items';

export type RootAction = Action<ItemsActionTypes>;

export interface RootState {
  items: ItemsState;
}

const rootReducer = combineReducers<RootState>({
  items: itemsReducer
});

const store = createStore(rootReducer);

export default store;