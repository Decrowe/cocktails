import { inject, Injectable, signal } from '@angular/core';
import { Cocktail, Ingredient } from '../models';
import { catchError, combineLatest, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Alphabete } from './alphabete';

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
  private collection = signal<string[]>([]);

  private allCocktailsRequests = Alphabete.map((letter) =>
    this.httpClient
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + letter)
      .pipe(
        map((response: any) => response['drinks']),
        map((dtos: any[]) => dtos.map((dto) => cocktailMapper(dto))),
        catchError(() => of([] as Cocktail[]))
      )
  );
  private allCocktails$ = combineLatest(this.allCocktailsRequests).pipe(
    map((cocktailLists: Cocktail[][]) =>
      cocktailLists.reduce((prev, curr) => [...prev, ...curr])
    )
  );
  private allCocktails = signal<Cocktail[]>([]);

  constructor() {
    this.allCocktails$.subscribe((cockails) => {
      this.allCocktails.set(cockails);
      console.log(`Found ${cockails.length} Cocktails:`);
      console.log(cockails);
    });
  }

  findCocktails(term: string): Observable<Cocktail[]> {
    return of(
      this.allCocktails().filter((cocktail) =>
        cocktail.name
          .replaceAll(' ', '')
          .toUpperCase()
          .includes(term.replaceAll(' ', '').toUpperCase())
      )
    );
  }

  saveCollection(cocktailIds: string[]) {
    this.collection.set([...cocktailIds]);
  }

  clearCollection() {
    this.collection.set([]);
  }

  getCocktails(): Observable<Cocktail[]> {
    return of(
      this.allCocktails().filter(({ id }) => this.collection().includes(id))
    );
  }

  sendOrders(cocktails: Cocktail[]) {
    throw new Error('Method not implemented.');
  }
}