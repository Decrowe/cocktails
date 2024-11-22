import { Observable } from 'rxjs';
import { Cocktail } from '../../../shared/models';

export interface ICocktailsDataService {
  getCocktails(): Observable<Cocktail[]>;

  sendOrders(cocktails: Cocktail[]): void;
}
