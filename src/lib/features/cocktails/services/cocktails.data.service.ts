import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICocktailsDataService } from './cocktails.data.interface';
import { Cocktail, NewOrder } from '../../../shared/models';
import { OrderCocktail } from '../../../shared/models/queue';

@Injectable({ providedIn: 'root' })
export class CocktailsDataService implements ICocktailsDataService {
  sendOrder(order: NewOrder): void {
    throw new Error('Method not implemented.');
  }
  getCocktails(): Observable<Cocktail[]> {
    return of([]);
  }
}
