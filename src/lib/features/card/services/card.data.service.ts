import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CardService, CocktailsService } from '../../../../api';
import { Cocktail, CocktailMapper } from '../../../shared';
import { ICardDataService } from './card.data.interface';

@Injectable({ providedIn: 'root' })
export class CardDataService implements ICardDataService {
  private _cocktailsService = inject(CocktailsService);
  private _cardService = inject(CardService);

  getAllCocktails(): Observable<Cocktail[]> {
    return this._cocktailsService
      .getAll()
      .pipe(map((dtos) => dtos.map((dto) => CocktailMapper.from(dto))));
  }
  search(term: string): Observable<Cocktail[]> {
    return this._cocktailsService
      .search(term)
      .pipe(map((dtos) => dtos.map((dto) => CocktailMapper.from(dto))));
  }
  clearCard(): Observable<void> {
    return this._cardService.clearCard();
  }
  saveCard(cocktailIds: string[]): Observable<void> {
    return this._cardService.saveCard(cocktailIds);
  }
}
