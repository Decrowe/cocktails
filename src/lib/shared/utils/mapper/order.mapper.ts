import { CreateOrderDto, CreateOrderItemDto } from '../../../../api';
import { OrderDto, OrderItemDto } from '../../../../api/manual-added-models';
import { NewOrder } from '../../models';
import { Order, OrderCocktail } from '../../models/queue';
import { MapperFrom, MapperTo } from './mapper.base';

export const NewOrderMapper: MapperTo<NewOrder, CreateOrderDto> = {
  to: (model) => {
    const { orderer, cocktails } = model;
    const items = cocktails.map((cocktail) => OrderCocktailMapper.to(cocktail));
    return { orderer, items };
  },
};

export const OrderCocktailMapper: MapperTo<OrderCocktail, CreateOrderItemDto> =
  {
    to: (model) => {
      const { count, id } = model;
      return { cocktailId: id, count };
    },
  };

export const OrderMapper: MapperFrom<OrderDto, Order> = {
  from: function (dto: OrderDto): Order {
    const { id, orderer, timestamp, items } = dto;
    return {
      id,
      orderer,
      timestamp,
      cocktails: items.map((item) => OrderItemMapper.from(item)),
    };
  },
};

export const OrderItemMapper: MapperFrom<OrderItemDto, OrderCocktail> = {
  from: function (dto: OrderItemDto): OrderCocktail {
    const { cocktailId, cocktailName, count } = dto;
    return { id: cocktailId, count, name: cocktailName };
  },
};
