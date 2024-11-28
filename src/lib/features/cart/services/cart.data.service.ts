import { Injectable } from '@angular/core';
import { ICartDataService } from './cart.data.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartDataService implements ICartDataService {
  sendOrder(): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
