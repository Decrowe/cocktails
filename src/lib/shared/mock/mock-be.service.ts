import {
  inject,
  Injectable,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { Cocktail, Ingredient } from '../models';
import { combineLatest, count, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

function cocktailMapper(dto: any): Cocktail {
  return {
    id: dto['idDrink'],
    ingredients: ingredientMapper(dto),
    name: dto['strDrink'],
    imgSrc: dto['strDrinkThumb'],
  };
}

function ingredientMapper(dto: any): Ingredient[] {
  const ingredients: Ingredient[] = [];

  const measurePrefix = 'strMeasure';
  const measureKeys = Object.keys(dto).filter((key) =>
    key.includes(measurePrefix)
  );

  const ingredientPrefix = 'strIngredient';
  const ingredientKeys = Object.keys(dto).filter((key) =>
    key.includes(ingredientPrefix)
  );

  ingredientKeys.forEach((ingredientKey) => {
    if (dto[ingredientKey] !== null) {
      const ingredient = dto[ingredientKey];

      const suffix = ingredientKey.slice(ingredientKey.length - 1);
      const measureKey = measurePrefix + suffix;

      const measure = dto[measureKey];

      ingredients.push({ name: ingredient, quantity: measure });
    }
  });
  return ingredients;
}

@Injectable({ providedIn: 'root' })
export class MockBE {
  private httpClient = inject(HttpClient);

  orders = signal<Cocktail[]>([]);

  sendOrders(cocktails: Cocktail[]) {
    throw new Error('Method not implemented.');
  }

  getCocktails(count: number): Observable<Cocktail[]> {
    const requests = Array(count)
      .fill(0)
      .map(() =>
        this.httpClient
          .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
          .pipe(
            map((response: any) => response['drinks'][0]),
            map((dto) => cocktailMapper(dto))
          )
      );

    return combineLatest(requests);
  }
}
