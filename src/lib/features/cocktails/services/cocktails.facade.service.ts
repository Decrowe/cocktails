import { inject, Injectable, signal } from '@angular/core';
import { CocktailsDataServiceIT } from './cocktail.data.injection-token';
import { first } from 'rxjs';
import { Cocktail } from '../../../shared';

@Injectable({ providedIn: 'root' })
export class CocktailsFacade {
  private dataService = inject(CocktailsDataServiceIT);

  cocktails = signal<Cocktail[]>([]);

  constructor() {
    this.fetchCocktails();
  }

  fetchCocktails() {
    console.log('fetching cocktails now..');

    this.dataService
      .getCocktails()
      .pipe(first())
      .subscribe({ next: (cocktails) => this.cocktails.set(cocktails) });
  }

  sendOrder() {}
}
