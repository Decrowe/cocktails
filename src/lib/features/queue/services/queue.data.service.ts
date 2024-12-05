import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { Order, RejectReason } from '../../../shared/models/queue';
import { IQueueDataService } from './queue.data.interface';

@Injectable({ providedIn: 'root' })
export class QueueDataService implements IQueueDataService {
  private _socket: Socket;

  orders$: Observable<Order[]> = new Observable((observer) => {
    this._socket.on('queueUpdated', (orders) => {
      observer.next(orders);
    });
  });

  constructor() {
    this._socket = io('http://localhost:3000');
  }

  orderCompleted(order: Order): Observable<void> {
    throw new Error('Method not implemented.');
  }
  orderRejected(order: Order, rejectReason: RejectReason): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
