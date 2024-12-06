import { InjectionToken } from '@angular/core';
import { ICardDataService } from './card.data.interface';

export const CardDataServiceIT = new InjectionToken<ICardDataService>(
  'Card Data Service'
);
