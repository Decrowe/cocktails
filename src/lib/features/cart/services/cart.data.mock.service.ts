import { inject, Injectable } from '@angular/core';
import { ICartDataService } from './cart.data.interface';
import { EMPTY, Observable, of } from 'rxjs';
import { MockBE, NewOrder } from '../../../shared';

@Injectable({ providedIn: 'root' })
export class CartDataMockService implements ICartDataService {
  private mockBE = inject(MockBE);

  sendOrder(order: NewOrder): Observable<void> {
    this.mockBE.sendOrder(order);
    return EMPTY;
  }
}
