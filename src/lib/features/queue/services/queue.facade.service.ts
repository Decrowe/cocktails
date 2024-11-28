import { computed, inject, Injectable, signal } from '@angular/core';
import { QueueDataServiceIT } from './queue.data.injection-token';
import { Order, RejectReason } from '../../../shared/models/queue';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class QueueFacade {
  private dataService = inject(QueueDataServiceIT);

  private orders$ = this.dataService.orders$;
  orders = toSignal(this.orders$, { initialValue: [] });
  count = computed(() => this.orders().length);

  orderCompleted(order: Order) {
    this.dataService.orderCompleted(order);
  }
  orderRejected(order: Order, reason: RejectReason) {
    this.dataService.orderRejected(order, reason);
  }
}
