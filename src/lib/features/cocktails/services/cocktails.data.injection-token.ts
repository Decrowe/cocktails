import { InjectionToken } from '@angular/core';
import { ICocktailsDataService } from './cocktails.data.interface';

export const CocktailsDataServiceIT = new InjectionToken<ICocktailsDataService>(
  'Cocktail Data Service'
);
