import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cocktail } from '../../../shared';
import { ICardDataService } from './card.data.interface';

@Injectable({ providedIn: 'root' })
export class CardDataService implements ICardDataService {
  getAllCocktails(): Observable<Cocktail[]> {
    throw new Error('Method not implemented.');
  }
  clearCard(): Observable<void> {
    throw new Error('Method not implemented.');
  }
  saveCard(cocktailIds: string[]): Observable<void> {
    throw new Error('Method not implemented.');
  }
  search(term: string): Observable<Cocktail[]> {
    return of([]);
  }
}
