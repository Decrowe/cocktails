import { Observable } from 'rxjs';
import { NewOrder } from '../../../shared';

export interface ICartDataService {
  sendOrder(order: NewOrder): Observable<void>;
}
