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
import { CocktailsDataServiceIT } from '../lib/features/cocktails/services/cocktail.data.injection-token';
import { CocktailsDataMockService } from '../lib/features/cocktails/services/cocktails.data.mock.service';
import { CocktailsDataService } from '../lib/features/cocktails/services/cocktails.data.service';

const appProviders: Provider[] = [
  {
    provide: CocktailsDataServiceIT,
    useClass: isDevMode() ? CocktailsDataMockService : CocktailsDataService,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    appProviders,
  ],
};
