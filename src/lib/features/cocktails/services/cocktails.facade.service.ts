import { inject, Injectable, signal } from '@angular/core';
import { first } from 'rxjs';
import { Cocktail } from '../../../shared';
import { CocktailsDataServiceIT } from './cocktails.data.injection-token';

@Injectable({ providedIn: 'root' })
export class CocktailsFacade {
  private dataService = inject(CocktailsDataServiceIT);

  cocktails = signal<Cocktail[]>([]);

  constructor() {
    this.fetchCocktails();
  }

  fetchCocktails() {
    this.dataService
      .getCocktails()
      .pipe(first())
      .subscribe({ next: (cocktails) => this.cocktails.set(cocktails) });
  }

  sendOrder() {}
}
