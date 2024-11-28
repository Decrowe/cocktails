import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Order, RejectReason, RejectReasons } from '../../models/queue';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order-item',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderItemComponent {
  rejectResons = RejectReasons;

  order = input.required<Order>();

  completed = output();
  rejected = output<RejectReason>();
}
