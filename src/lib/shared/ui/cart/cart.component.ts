import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CartSerivce } from '../../services';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AppRoutes } from '../../../../app/app.routes';
import { Position } from '../../models';

@Component({
  selector: 'app-cart',
  imports: [
    RouterLink,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  private cart = inject(CartSerivce);

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
}
