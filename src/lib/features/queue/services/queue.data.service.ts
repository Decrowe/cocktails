import { Injectable } from '@angular/core';
import { IQueueDataService } from './queue.data.interface';
import { Observable, of } from 'rxjs';
import { Order, RejectReason } from '../../../shared/models/queue';

@Injectable({ providedIn: 'root' })
export class QueueDataService implements IQueueDataService {
  orders$: Observable<Order[]> = of([]);

  orderCompleted(order: Order): Observable<void> {
    throw new Error('Method not implemented.');
  }
  orderRejected(order: Order, rejectReason: RejectReason): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
