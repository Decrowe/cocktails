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
      .getAll()
      .pipe(map((dtos) => dtos.map((dto) => CocktailMapper.from(dto))));
  }
}
