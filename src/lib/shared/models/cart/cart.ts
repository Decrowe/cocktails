import { Position } from './position';

export type Cart = {
  positions: Position[];
};

export const EMPTY_CART: Cart = {
  positions: [],
};
