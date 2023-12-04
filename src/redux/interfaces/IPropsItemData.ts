import { IPropsForecastAll } from './IPropsForecasts';

export interface IPropsItemData {
  items: IPropsForecastAll,
  isloading?: boolean,
  activeIndex?: number,
  error?: null | Error,
}
