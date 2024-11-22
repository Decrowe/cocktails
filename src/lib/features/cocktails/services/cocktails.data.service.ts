import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICocktailsDataService } from './cocktails.data.interface';
import { Cocktail } from '../../../shared/models';

@Injectable({ providedIn: 'root' })
export class CocktailsDataService implements ICocktailsDataService {
  sendOrders(cocktails: Cocktail[]): void {
    throw new Error('Method not implemented.');
  }
  getCocktails(): Observable<Cocktail[]> {
    return of([]);
  }
}
