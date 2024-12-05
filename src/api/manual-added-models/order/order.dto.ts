import { OrderItemDto } from './order-item.dto';

export interface OrderDto {
  id: string;
  timestamp: Date;
  orderer: string;
  items: OrderItemDto[];
}
