import { inject, Injectable } from '@angular/core';
import { ICollectionDataService } from './collection.data.interface';
import { Observable, of } from 'rxjs';
import { Cocktail, MockBE } from '../../../shared';

@Injectable({ providedIn: 'root' })
export class CollectionDataMockService implements ICollectionDataService {
  getAllCocktails(): Observable<Cocktail[]> {
    return this.mockBE.getCocktails();
  }
  private mockBE = inject(MockBE);

  search(term: string): Observable<Cocktail[]> {
    return this.mockBE.findCocktails(term);
  }

  clearCollection(): Observable<void> {
    this.mockBE.clearCollection();
    return of();
  }

  saveCollection(cocktailIds: string[]): Observable<void> {
    this.mockBE.saveCollection(cocktailIds);
    return of();
  }
}
