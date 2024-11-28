import { InjectionToken } from '@angular/core';
import { ICartDataService } from './cart.data.interface';

export const CartDataServiceIT = new InjectionToken<ICartDataService>(
  'Cart Data Service'
);
