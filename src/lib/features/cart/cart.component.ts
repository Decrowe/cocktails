import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartFacade } from './services/cart.facade.service';
import { AppRoutes } from '../../../app/app.routes';
import { Position } from '../../shared';

@Component({
  selector: 'app-cart',
  imports: [
    RouterLink,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private cart = inject(CartFacade);

  appRoutes = AppRoutes;
  positions = this.cart.positions;

  increase(position: Position) {
    this.cart.increase(position);
  }
  decrease(position: Position) {
    this.cart.decrease(position);
  }
  remove(position: Position) {
    this.cart.remove(position);
  }
  clear() {
    this.cart.clear();
  }
  sendOrder() {
    this.cart.sendOrder();
  }
}
