import { OrderCocktail } from './order-cocktail';

export type Order = {
  id: string;
  orderer: string;
  cocktails: OrderCocktail[];
};
