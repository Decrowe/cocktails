import {
  ApplicationConfig,
  isDevMode,
  Provider,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  CocktailsDataServiceIT,
  CocktailsDataMockService,
  CocktailsDataService,
  CollectionDataServiceIT,
  CollectionDataMockService,
  CollectionDataService,
  QueueDataServiceIT,
  QueueDataMockService,
  QueueDataService,
  CartDataServiceIT,
  CartDataMockService,
  CartDataService,
} from '../lib/features';

const appProviders: Provider[] = [
  {
    provide: CocktailsDataServiceIT,
    useExisting: isDevMode() ? CocktailsDataMockService : CocktailsDataService,
  },
  {
    provide: CollectionDataServiceIT,
    useExisting: isDevMode()
      ? CollectionDataMockService
      : CollectionDataService,
  },
  {
    provide: QueueDataServiceIT,
    useExisting: isDevMode() ? QueueDataMockService : QueueDataService,
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
  ],
};
