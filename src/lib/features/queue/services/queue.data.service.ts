import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { BASE_PATH } from '../../../../api';
import {
  CompleteOrderDto,
  CompleteOrderState,
  Messages,
} from '../../../../api/manual-added-models';
import { OrderMapper } from '../../../shared';
import { Order } from '../../../shared/models/queue';
import { IQueueDataService } from './queue.data.interface';

@Injectable({ providedIn: 'root' })
export class QueueDataService implements IQueueDataService {
  private _socket: Socket;
  private _apiBasePath = inject(BASE_PATH);

  orders$: Observable<Order[]>;

  constructor() {
    this._socket = io(this._apiBasePath);
    this.orders$ = new Observable((observer) => {
      this._socket.on('queueUpdated', (orderDtos: any[]) => {
        const orders = orderDtos.map((orderDTO) => OrderMapper.from(orderDTO));
        observer.next(orders);
      });
    });
  }

  orderCompleted(
    order: Order,
    state: CompleteOrderState,
    messages: string[]
  ): void {
    const { id } = order;
    const completeOrder: CompleteOrderDto = { id, messages, state };

    this._socket.emit(Messages.completeOrder, completeOrder);
  }
}
