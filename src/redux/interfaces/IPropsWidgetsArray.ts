import { IPropsForecastAll } from '@/redux/interfaces/IPropsForecasts';

export interface IPropsWidgetsArray {
  widgetsData: IPropsForecastAll,
  status: string,
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'fulfilled',
  ERROR = 'error',
}
