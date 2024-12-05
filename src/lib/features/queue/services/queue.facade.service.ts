import { computed, inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Order, RejectReason } from '../../../shared/models/queue';
import { QueueDataServiceIT } from './queue.data.injection-token';

@Injectable({ providedIn: 'root' })
export class QueueFacade {
  private dataService = inject(QueueDataServiceIT);

  private orders$ = this.dataService.orders$;
  orders = toSignal(this.orders$, { initialValue: [] });
  count = computed(() => this.orders().length);

  orderCompleted(order: Order) {
    this.dataService.orderCompleted(order, 'Completed', []);
  }
  orderRejected(order: Order, reason: RejectReason) {
    this.dataService.orderCompleted(order, 'Rejected', []);
  }
}
