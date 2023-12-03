import { IPropsForecastAll } from './IPropsForecasts';

export interface IPropsItemData {
  items: IPropsForecastAll,
  loading?: boolean,
  inputValue: string,
  activeIndex?: number,
  error?: null | Error,
}
