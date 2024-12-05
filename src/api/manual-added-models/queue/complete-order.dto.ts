import { CompleteOrderState } from './complete-order-state.dto';

export interface CompleteOrderDto {
  id: string;
  state: CompleteOrderState;
  messages: string[];
}
