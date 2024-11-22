import { Routes } from '@angular/router';

export const AppRoutes = {
  cocktails: 'cockatils',
  queue: 'queue',
} as const;

export type AppRoute = (typeof AppRoutes)[keyof typeof AppRoutes];

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: AppRoutes.cocktails },
  {
    path: AppRoutes.cocktails,
    loadComponent: () =>
      import('../lib/features/cocktails/cocktails.component').then(
        (module) => module.CocktailsComponent
      ),
  },
  {
    path: AppRoutes.queue,
    loadComponent: () =>
      import('../lib/features/queue/queue.component').then(
        (module) => module.QueueComponent
      ),
  },
  { path: '**', redirectTo: AppRoutes.cocktails },
];
