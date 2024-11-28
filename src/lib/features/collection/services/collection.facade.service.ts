import { computed, inject, Injectable, signal, untracked } from '@angular/core';
import { CollectionDataServiceIT } from './collection.data.injection-token';
import {
  BehaviorSubject,
  debounceTime,
  filter,
  first,
  startWith,
  switchMap,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Cocktail, InUseCocktail } from '../../../shared';
import { computeMsgId } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class CollectionFacade {
  private dataService = inject(CollectionDataServiceIT);
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
  collection = signal<string[]>([]);

  cocktails = computed(() => {
    const cocktailResults = this.cocktailResults();
    const selected = this.collection();

    return cocktailResults.map((result) => {
      const inUse = selected.includes(result.id);
      return { ...result, inUse } as InUseCocktail;
    });
  });

  private use(cocktail: Cocktail) {
    const selected = this.collection();
    if (selected.includes(cocktail.id)) return;

    selected.push(cocktail.id);
    this.collection.set([...selected]);
  }

  private unuse(cocktail: Cocktail) {
    const filtered = this.collection().filter((id) => id !== cocktail.id);
    this.collection.set([...filtered]);
  }

  search(term: string | null) {
    this.searchterm.next(term);
  }

  toggleUsage(cocktail: InUseCocktail) {
    cocktail.inUse ? this.unuse(cocktail) : this.use(cocktail);
  }

  clearSelection() {
    this.collection.set([]);
    this.dataService.clearCollection();
  }

  saveSelection() {
    this.dataService.saveCollection(this.collection());
  }
}
