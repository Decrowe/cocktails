import { Injectable } from '@angular/core';
import { ICollectionDataService } from './collection.data.interface';
import { Observable, of } from 'rxjs';
import { Cocktail } from '../../../shared';

@Injectable({ providedIn: 'root' })
export class CollectionDataService implements ICollectionDataService {
  getAllCocktails(): Observable<Cocktail[]> {
    throw new Error('Method not implemented.');
  }
  clearCollection(): Observable<void> {
    throw new Error('Method not implemented.');
  }
  saveCollection(cocktailIds: string[]): Observable<void> {
    throw new Error('Method not implemented.');
  }
  search(term: string): Observable<Cocktail[]> {
    return of([]);
  }
}
