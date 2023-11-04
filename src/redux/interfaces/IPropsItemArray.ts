import { IPropsProperties } from './IPropsProperties';

export interface IPropsItemArray {
  items: IPropsProperties[],
  loading: boolean,
  error: null | string | Error,
}
