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
  CocktailsDataMockService,
  CocktailsDataService,
  CocktailsDataServiceIT,
  QueueDataMockService,
  QueueDataService,
  QueueDataServiceIT,
} from '../lib/features';
import { CardDataServiceIT } from '../lib/features/card/services/card.data.injection-token';
import { CardDataMockService } from '../lib/features/card/services/card.data.mock.service';
import { CardDataService } from '../lib/features/card/services/card.data.service';
import { routes } from './app.routes';

const ApiBasePath: Provider = {
  provide: BASE_PATH,
  useValue: 'http://192.168.178.99:3000',
};

const appProviders: Provider[] = [
  {
    provide: CocktailsDataServiceIT,
    useExisting: isDevMode() ? CocktailsDataMockService : CocktailsDataService,
  },
  {
    provide: CardDataServiceIT,
    useExisting: isDevMode() ? CardDataMockService : CardDataService,
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
    provideAnimationsAsync(),
    appProviders,
    ApiBasePath,
  ],
};
