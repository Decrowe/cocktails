import { Observable } from 'rxjs';
import { Cocktail } from '../../../shared';

export interface ICollectionDataService {
  search(term: string): Observable<Cocktail[]>;
  getAllCocktails(): Observable<Cocktail[]>;

  clearCollection(): Observable<void>;
  saveCollection(cocktailIds: string[]): Observable<void>;
}
