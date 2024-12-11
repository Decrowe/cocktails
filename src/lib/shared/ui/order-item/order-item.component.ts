import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Order, RejectReason, RejectReasons } from '../../models/queue';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-order-item',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderItemComponent {
  user = inject(UserService);
  rejectResons = RejectReasons;

  order = input.required<Order>();

  completed = output();
  rejected = output<RejectReason>();
}
