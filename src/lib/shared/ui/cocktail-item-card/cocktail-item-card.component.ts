import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { InUseCocktail } from '../../models';

@Component({
  selector: 'app-cocktail-item-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatCheckboxModule],
  templateUrl: './cocktail-item-card.component.html',
  styleUrl: './cocktail-item-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailItemCardComponent {
  cocktail = input.required<InUseCocktail>();
  onSelected = output<string>();
}
