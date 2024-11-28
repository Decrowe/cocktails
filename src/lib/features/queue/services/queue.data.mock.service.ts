import { inject, Injectable } from '@angular/core';
import { IQueueDataService } from './queue.data.interface';
import { MockBE } from '../../../shared';
import { EMPTY, Observable, of } from 'rxjs';
import { Order, RejectReason } from '../../../shared/models/queue';

@Injectable({ providedIn: 'root' })
export class QueueDataMockService implements IQueueDataService {
  private mockBE = inject(MockBE);
  orders$: Observable<Order[]> = this.mockBE.orders$;

  orderCompleted(order: Order): Observable<void> {
    this.mockBE.orderCompleted(order);
    return EMPTY;
  }
  orderRejected(order: Order, rejectReason: RejectReason): Observable<void> {
    this.mockBE.orderRejected(order, rejectReason);
    return EMPTY;
  }
}
