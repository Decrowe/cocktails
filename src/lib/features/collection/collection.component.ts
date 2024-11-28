import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { filter } from 'rxjs';
import { CollectionFacade } from './services/collection.facade.service';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { CocktailItemCollectionComponent, InUseCocktail } from '../../shared';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-collection',
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
    CocktailItemCollectionComponent,
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionComponent {
  private facade = inject(CollectionFacade);

  checked = true;

  searchterm = new FormControl<string>('');
  cocktails = this.facade.cocktails;
  collection = this.facade.collection;

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
