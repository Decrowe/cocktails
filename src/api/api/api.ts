export * from './card.service';
import { CardService } from './card.service';
export * from './cocktails.service';
import { CocktailsService } from './cocktails.service';
export * from './orders.service';
import { OrdersService } from './orders.service';
export const APIS = [CardService, CocktailsService, OrdersService];
