import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MockBE } from '../../../shared/mock/mock-be.service';
import { Cocktail } from '../../../shared/models';
import { ICocktailsDataService } from './cocktails.data.interface';

@Injectable({ providedIn: 'root' })
export class CocktailsDataMockService implements ICocktailsDataService {
  private mockBE = inject(MockBE);

  getCocktails(): Observable<Cocktail[]> {
    return this.mockBE.getCocktails();
  }
}
