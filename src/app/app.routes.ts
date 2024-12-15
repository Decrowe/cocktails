import { Routes } from '@angular/router';
import { UserGuard } from '../lib/shared/services/user';
import { LoginComponent } from '../lib/shared/services/user/login/login.component';

export const AppRoutes = {
  login: 'login',
  card: 'card',
  cocktails: 'cocktails',
  cart: 'cart',
  queue: 'queue',
} as const;

export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [UserGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppRoutes.cocktails },
      {
        path: AppRoutes.card,
        loadComponent: () =>
          import('../lib/features').then((module) => module.CardComponent),
      },
      {
        path: AppRoutes.cocktails,
        loadComponent: () =>
          import('../lib/features').then((module) => module.CocktailsComponent),
      },
      {
        path: AppRoutes.cart,
        loadComponent: () =>
          import('../lib/features').then((module) => module.CartComponent),
      },
      {
        path: AppRoutes.queue,
        loadComponent: () =>
          import('../lib/features').then((module) => module.QueueComponent),
      },
    ],
  },
  { path: AppRoutes.login, pathMatch: 'full', component: LoginComponent },
  { path: '**', redirectTo: AppRoutes.cocktails },
];
