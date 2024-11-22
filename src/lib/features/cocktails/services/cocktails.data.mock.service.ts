import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICocktailsDataService } from './cocktails.data.interface';
import { Cocktail } from '../../../shared/models';
import { MockBE } from '../../../shared/mock/mock-be.service';

@Injectable({ providedIn: 'root' })
export class CocktailsDataMockService implements ICocktailsDataService {
  private mockBE = inject(MockBE);

  getCocktails(): Observable<Cocktail[]> {
    return this.mockBE.getCocktails();
  }
  // cocktails$: Observable<Cocktail[]> = of(MOCK_COCKTAILS);

  sendOrders(cocktails: Cocktail[]): void {
    this.mockBE.sendOrders(cocktails);
  }
}
