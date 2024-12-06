import { Routes } from '@angular/router';

export const AppRoutes = {
  collection: 'card',
  cocktails: 'cocktails',
  cart: 'cart',
  queue: 'queue',
} as const;

export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.cocktails },
  {
    path: AppRoutes.collection,
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
  { path: '**', redirectTo: AppRoutes.cocktails },
];
