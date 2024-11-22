import {
  ChangeDetectionStrategy,
  Component,
  inject,
  isDevMode,
} from '@angular/core';
import { CocktailsFacade } from './services/cocktails.facade.service';
import { Cocktail } from '../../shared/models';
import { MatBadgeModule } from '@angular/material/badge';
import { CocktailItemSelectionComponent } from '../../shared/ui';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-cocktails',
  imports: [
    CocktailItemSelectionComponent,
    MatBadgeModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailsComponent {
  private facade = inject(CocktailsFacade);

  cart = this.facade.cart;
  cocktails = this.facade.cocktails;

  constructor() {
    this.facade.fetchCocktails();
  }

  onAdd(cocktail: Cocktail) {
    this.facade.addToCart(cocktail);
  }

  onRemove(cocktail: Cocktail) {
    this.facade.removeFromCart(cocktail);
  }

  inCart(cocktail: Cocktail): number {
    return this.cart.getCount(cocktail);
  }
}
