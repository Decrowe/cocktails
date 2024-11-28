import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { QueueFacade } from './services/queue.facade.service';
import { Order, RejectReason } from '../../shared/models/queue';
import { OrderItemComponent } from '../../shared';

@Component({
  selector: 'app-queue',
  imports: [OrderItemComponent],
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueueComponent {
  private facade = inject(QueueFacade);

  orders = this.facade.orders;

  orderCompleted(order: Order) {
    this.facade.orderCompleted(order);
  }

  orderRejected(order: Order, reason: RejectReason) {
    this.facade.orderRejected(order, reason);
  }
}
