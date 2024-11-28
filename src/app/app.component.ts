import { Component, computed, inject, signal } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutes } from './app.routes';
import { MatBadgeModule } from '@angular/material/badge';
import { filter, map } from 'rxjs';
import { Event, RouterEvent, Router, RouterModule } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { CartFacade } from '../lib/features/cart/services/cart.facade.service';
import { QueueFacade } from '../lib/features/queue/services/queue.facade.service';
@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    TitleCasePipe,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private router = inject(Router);
  private cart = inject(CartFacade);
  private queue = inject(QueueFacade);

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
