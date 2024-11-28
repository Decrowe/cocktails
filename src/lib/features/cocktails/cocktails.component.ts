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
import { CartFacade } from '../cart/services/cart.facade.service';

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
  private cart = inject(CartFacade);

  cocktails = this.facade.cocktails;

  constructor() {
    this.facade.fetchCocktails();
  }

  onAdd(cocktail: Cocktail) {
    this.cart.add(cocktail);
  }

  inCart(cocktail: Cocktail): number {
    return this.cart.getCount(cocktail);
  }
}
