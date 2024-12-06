import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cocktail, MockBE } from '../../../shared';
import { ICardDataService } from './card.data.interface';

@Injectable({ providedIn: 'root' })
export class CardDataMockService implements ICardDataService {
  getAllCocktails(): Observable<Cocktail[]> {
    return this.mockBE.getCocktails();
  }
  private mockBE = inject(MockBE);

  search(term: string): Observable<Cocktail[]> {
    return this.mockBE.findCocktails(term);
  }

  clearCard(): Observable<void> {
    this.mockBE.clearCard();
    return of();
  }

  saveCard(cocktailIds: string[]): Observable<void> {
    this.mockBE.saveCard(cocktailIds);
    return of();
  }
}
