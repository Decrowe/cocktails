import { Component, computed, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutes } from './app.routes';
import { CartSerivce } from '../lib/shared';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private cart = inject(CartSerivce);

  cartCount = this.cart.count;
  appRoutes = AppRoutes;
}
