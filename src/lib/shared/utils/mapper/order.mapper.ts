import { CreateOrderDto, CreateOrderItemDto } from '../../../../api';
import { NewOrder } from '../../models';
import { OrderCocktail } from '../../models/queue';
import { MapperTo } from './mapper.base';

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
