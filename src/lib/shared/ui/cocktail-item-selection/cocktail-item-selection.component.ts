import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Cocktail } from '../../models';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-cocktail-item-selection',
  imports: [MatBadgeModule],
  templateUrl: './cocktail-item-selection.component.html',
  styleUrl: './cocktail-item-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailItemSelectionComponent {
  cocktail = input.required<Cocktail>();
  count = input<number>(0);
  onAdd = output<void>();
}
