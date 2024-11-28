import { Observable } from 'rxjs';
import { Order, RejectReason } from '../../../shared/models/queue';

export interface IQueueDataService {
  orders$: Observable<Order[]>;

  orderCompleted(order: Order): Observable<void>;
  orderRejected(order: Order, rejectReason: RejectReason): Observable<void>;
}
