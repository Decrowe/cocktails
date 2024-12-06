import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject, debounceTime, switchMap } from 'rxjs';
import { Cocktail, InUseCocktail } from '../../../shared';
import { CardDataServiceIT } from './card.data.injection-token';

@Injectable({ providedIn: 'root' })
export class CardFacade {
  private dataService = inject(CardDataServiceIT);
  private searchterm = new BehaviorSubject<string | null>(null);
  private foundCocktails$ = this.searchterm.asObservable().pipe(
    debounceTime(150),
    switchMap((term) =>
      term === null
        ? this.dataService.getAllCocktails()
        : this.dataService.search(term)
    )
  );
  private cocktailResults = toSignal(this.foundCocktails$, {
    initialValue: [],
  });
  card = signal<string[]>([]);

  cocktails = computed(() => {
    const cocktailResults = this.cocktailResults();
    const selected = this.card();

    return cocktailResults.map((result) => {
      const inUse = selected.includes(result.id);
      return { ...result, inUse } as InUseCocktail;
    });
  });

  private use(cocktail: Cocktail) {
    const selected = this.card();
    if (selected.includes(cocktail.id)) return;

    selected.push(cocktail.id);
    this.card.set([...selected]);
  }

  private unuse(cocktail: Cocktail) {
    const filtered = this.card().filter((id) => id !== cocktail.id);
    this.card.set([...filtered]);
  }

  search(term: string | null) {
    this.searchterm.next(term);
  }

  toggleUsage(cocktail: InUseCocktail) {
    cocktail.inUse ? this.unuse(cocktail) : this.use(cocktail);
  }

  clearSelection() {
    this.card.set([]);
    this.dataService.clearCard();
  }

  saveSelection() {
    this.dataService.saveCard(this.card());
  }
}
