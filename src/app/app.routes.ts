import { Routes } from '@angular/router';

export const AppRoutes = {
  collection: 'collection',
  cocktails: 'cockatils',
  cart: 'cart',
  queue: 'queue',
} as const;

export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.cocktails },
  {
    path: AppRoutes.collection,
    loadComponent: () =>
      import('../lib/features').then((module) => module.CollectionComponent),
  },
  {
    path: AppRoutes.cocktails,
    loadComponent: () =>
      import('../lib/features').then((module) => module.CocktailsComponent),
  },
  {
    path: AppRoutes.cart,
    loadComponent: () =>
      import('../lib/shared/ui').then((module) => module.CartComponent),
  },
  {
    path: AppRoutes.queue,
    loadComponent: () =>
      import('../lib/features').then((module) => module.QueueComponent),
  },
  { path: '**', redirectTo: AppRoutes.cocktails },
];
