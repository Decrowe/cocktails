import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CocktailItemCardComponent, InUseCocktail } from '../../shared';
import { CardFacade } from './services/card.facade.service';

@Component({
  selector: 'app-card',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    CocktailItemCardComponent,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  private facade = inject(CardFacade);

  checked = true;

  searchterm = new FormControl<string>('');
  cocktails = this.facade.cocktails;
  card = this.facade.card;

  constructor() {
    this.searchterm.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe((term) => this.facade.search(term));
  }

  toggleUsage(cocktail: InUseCocktail) {
    this.facade.toggleUsage(cocktail);
  }

  clearSelection() {
    this.facade.clearSelection();
  }
  saveSelection() {
    this.facade.saveSelection();
  }
}
