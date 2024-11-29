export * from './cocktails.service';
import { CocktailsService } from './cocktails.service';
export * from './collection.service';
import { CollectionService } from './collection.service';
export * from './orders.service';
import { OrdersService } from './orders.service';
export const APIS = [CocktailsService, CollectionService, OrdersService];
