import { OrderCocktail } from './order-cocktail';

export type Order = {
  id: string;
  timestamp: Date;
  orderer: string;
  cocktails: OrderCocktail[];
};
