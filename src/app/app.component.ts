import { Component, inject, signal } from '@angular/core';

import { CommonModule, TitleCasePipe } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Event, Router, RouterEvent, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CartFacade } from '../lib/features/cart/services/cart.facade.service';
import { QueueFacade } from '../lib/features/queue/services/queue.facade.service';
import { LoginComponent } from '../lib/shared';
import { UserService } from '../lib/shared/services/user/user.service';
import { AppRoutes } from './app.routes';
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    TitleCasePipe,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    LoginComponent,
    MatMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private router = inject(Router);
  private cart = inject(CartFacade);
  private queue = inject(QueueFacade);

  user = inject(UserService);

  title = signal('');
  cartCount = this.cart.count;
  queueCount = this.queue.count;
  appRoutes = AppRoutes;

  constructor() {
    this.router.events
      .pipe(
        filter(
          (e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent
        )
      )
      .subscribe((e: RouterEvent) => this.title.set(e.url.replace('/', '')));
  }
}
