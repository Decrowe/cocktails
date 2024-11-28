import { InjectionToken } from '@angular/core';
import { ICollectionDataService } from './collection.data.interface';

export const CollectionDataServiceIT =
  new InjectionToken<ICollectionDataService>('Collection Data Service');
