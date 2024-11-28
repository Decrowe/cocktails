import { InjectionToken } from '@angular/core';
import { IQueueDataService } from './queue.data.interface';

export const QueueDataServiceIT = new InjectionToken<IQueueDataService>(
  'Queue Data Service'
);
