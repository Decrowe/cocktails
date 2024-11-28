import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICocktailsDataService } from './cocktails.data.interface';
import { Cocktail } from '../../../shared/models';
import { MockBE } from '../../../shared/mock/mock-be.service';
import { NewOrder } from '../../../shared/models/cocktail/new-order';

@Injectable({ providedIn: 'root' })
export class CocktailsDataMockService implements ICocktailsDataService {
  private mockBE = inject(MockBE);

  getCocktails(): Observable<Cocktail[]> {
    return this.mockBE.getCocktails();
  }

  sendOrder(order: NewOrder): void {
    this.mockBE.sendOrder(order);
  }
}
