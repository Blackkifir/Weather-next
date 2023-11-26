import { IPropsWidgetsAll } from '@/components/Widgets/interfaces/IPropsWidgets';

export interface IPropsWidgetsArray {
  widgetsData: IPropsWidgetsAll,
  status: string,
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'fulfilled',
  ERROR = 'error',
}
