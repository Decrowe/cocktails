import { inject, Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { CompleteOrderState } from '../../../../api/manual-added-models';
import { MockBE } from '../../../shared';
import { Order } from '../../../shared/models/queue';
import { IQueueDataService } from './queue.data.interface';

@Injectable({ providedIn: 'root' })
export class QueueDataMockService implements IQueueDataService {
  private mockBE = inject(MockBE);
  orders$: Observable<Order[]> = this.mockBE.orders$;

  orderCompleted(
    order: Order,
    state: CompleteOrderState,
    messages: string[]
  ): Observable<void> {
    this.mockBE.orderCompleted(order);
    return EMPTY;
  }
}
