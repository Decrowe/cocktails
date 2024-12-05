import { Observable } from 'rxjs';
import { CompleteOrderState } from '../../../../api/manual-added-models';
import { Order } from '../../../shared/models/queue';

export interface IQueueDataService {
  orders$: Observable<Order[]>;

  orderCompleted(
    order: Order,
    state: CompleteOrderState,
    messages: string[]
  ): void;
}
