import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  isDevMode,
  Provider,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { BASE_PATH } from '../api';
import {
  CartDataMockService,
  CartDataService,
  CartDataServiceIT,
  CocktailsDataService,
  CocktailsDataServiceIT,
  CollectionDataMockService,
  CollectionDataService,
  CollectionDataServiceIT,
  QueueDataService,
  QueueDataServiceIT,
} from '../lib/features';
import { routes } from './app.routes';

const appProviders: Provider[] = [
  {
    provide: CocktailsDataServiceIT,
    useExisting: isDevMode() ? CocktailsDataService : CocktailsDataService,
    // useExisting: isDevMode() ? CocktailsDataMockService : CocktailsDataService,
  },
  {
    provide: CollectionDataServiceIT,
    useExisting: isDevMode()
      ? CollectionDataMockService
      : CollectionDataService,
  },
  {
    provide: QueueDataServiceIT,
    useExisting: isDevMode() ? QueueDataService : QueueDataService,
    // useExisting: isDevMode() ? QueueDataMockService : QueueDataService,
  },
  {
    provide: CartDataServiceIT,
    useExisting: isDevMode() ? CartDataMockService : CartDataService,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    appProviders,
    provideAnimationsAsync(),
    { provide: BASE_PATH, useValue: 'http://localhost:3000' },
  ],
};
