import { CocktailDto } from '../../../../api';
import { Cocktail } from '../../models';
import { MapperFrom } from './mapper.base';

export const CocktailMapper: MapperFrom<CocktailDto, Cocktail> = {
  from: (dto) => {
    const { id, ingredients, name, imgSrc } = dto;
    return { id, ingredients, name, imgSrc };
  },
};
