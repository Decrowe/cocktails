import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { InUseCocktail } from '../../models';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-cocktail-item-collection',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './cocktail-item-collection.component.html',
  styleUrl: './cocktail-item-collection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailItemCollectionComponent {
  cocktail = input.required<InUseCocktail>();
  onSelected = output<string>();
}
