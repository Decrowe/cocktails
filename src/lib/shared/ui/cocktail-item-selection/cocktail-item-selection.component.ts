import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { Cocktail } from '../../models';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-cocktail-item-selection',
  imports: [CommonModule, MatBadgeModule],
  templateUrl: './cocktail-item-selection.component.html',
  styleUrl: './cocktail-item-selection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CocktailItemSelectionComponent {
  user = inject(UserService);

  cocktail = input.required<Cocktail>();
  count = input<number>(0);
  onAdd = output<void>();
}
