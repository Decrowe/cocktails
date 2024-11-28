import { Observable } from 'rxjs';
import { Cocktail } from '../../../shared/models';
import { NewOrder } from '../../../shared/models/cocktail/new-order';

export interface ICocktailsDataService {
  getCocktails(): Observable<Cocktail[]>;

  sendOrder(order: NewOrder): void;
}
