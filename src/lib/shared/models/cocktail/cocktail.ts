import { Ingredient } from './ingredient';

export type Cocktail = {
  name: string;
  id: string;
  imgSrc?: string;
  ingredients: Ingredient[];
};
