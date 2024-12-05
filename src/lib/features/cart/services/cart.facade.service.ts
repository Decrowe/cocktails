import { computed, inject, Injectable, signal } from '@angular/core';
import { Cocktail, Position } from '../../../shared';
import { OrderCocktail } from '../../../shared/models/queue';
import { CartDataServiceIT } from './cart.data.injection-token';

@Injectable({ providedIn: 'root' })
export class CartFacade {
  private dataService = inject(CartDataServiceIT);

  private _positions = signal<Position[]>([]);
  positions = this._positions.asReadonly();
  count = computed(() =>
    this._positions().reduce<number>(
      (count: number, curr) => (count += curr.count),
      0
    )
  );
  private _orderer = signal('LUKAS');

  add(added: Cocktail) {
    const positions = this._positions();
    const cocktailIndex = positions.findIndex(
      (position) => position.cocktail.id === added.id
    );

    if (cocktailIndex !== -1) positions[cocktailIndex].count++;
    else positions.push({ cocktail: added, count: 1 });

    this._positions.set([...positions]);
  }
  remove(removed: Position) {
    const positions = this._positions();
    const filtered = positions.filter(
      (position) => position.cocktail.id !== removed.cocktail.id
    );

    this._positions.set([...filtered]);
  }

  increase(increased: Position) {
    const positions = this._positions();
    const index = positions.findIndex(
      (position) => position.cocktail.id === increased.cocktail.id
    );

    positions[index].count++;
    this._positions.set([...positions]);
  }

  decrease(decreased: Position) {
    const positions = this._positions();
    const index = positions.findIndex(
      (position) => position.cocktail.id === decreased.cocktail.id
    );
    const count = positions[index].count;
    if (!count) return;

    positions[index].count--;
    this._positions.set([...positions]);
  }

  clear() {
    this._positions.set([]);
  }

  getCount(ordered: Cocktail): number {
    const positions = this._positions();
    const position = positions.find(
      ({ cocktail }) => cocktail.id === ordered.id
    );

    return position ? position.count : 0;
  }

  sendOrder() {
    const positions = this._positions();
    if (!positions.length) return;
    const cocktails = this._positions().map(
      ({ cocktail, count }) =>
        ({ count, id: cocktail.id, name: cocktail.name } as OrderCocktail)
    );

    const orderer = this._orderer();

    const response = this.dataService.sendOrder({
      cocktails,
      orderer,
    });

    response.subscribe({
      complete: () => {
        this._positions.set([]);
      },
    });
  }
}
