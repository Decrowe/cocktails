import { Observable } from 'rxjs';
import { Cocktail } from '../../../shared';

export interface ICardDataService {
  search(term: string): Observable<Cocktail[]>;
  getAllCocktails(): Observable<Cocktail[]>;

  clearCard(): Observable<void>;
  saveCard(cocktailIds: string[]): Observable<void>;
}
