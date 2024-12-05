import { inject, Injectable } from '@angular/core';
import { OrdersService } from '../../../../api';
import { NewOrder, NewOrderMapper } from '../../../shared';
import { ICartDataService } from './cart.data.interface';

@Injectable({ providedIn: 'root' })
export class CartDataService implements ICartDataService {
  private _ordersService = inject(OrdersService);

  sendOrder(newOrder: NewOrder) {
    const createOrderDTO = NewOrderMapper.to(newOrder);
    return this._ordersService.addOrder(createOrderDTO);
  }
}
