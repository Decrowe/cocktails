import { OrderCocktail } from '../queue';

export type NewOrder = {
  orderer: string;
  cocktails: OrderCocktail[];
};
