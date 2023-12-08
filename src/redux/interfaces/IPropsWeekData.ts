import { IPropsWeekAll } from './IPropsWeekAll';

export interface IPropsWeekData {
  weekItems: IPropsWeekAll;
  error: Error | null,
  isMovedTemp: boolean,
  knockValue: boolean,
}
