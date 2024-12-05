import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CocktailsService } from '../../../../api';
import { CocktailMapper } from '../../../shared';
import { Cocktail } from '../../../shared/models';
import { ICocktailsDataService } from './cocktails.data.interface';

@Injectable({ providedIn: 'root' })
export class CocktailsDataService implements ICocktailsDataService {
  private dataService = inject(CocktailsService);

  getCocktails(): Observable<Cocktail[]> {
    return this.dataService
      .findAll()
      .pipe(map((DTOs) => DTOs.map((DTO) => CocktailMapper.from(DTO))));
  }
}
