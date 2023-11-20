import { IPropsSliderMain } from '../../components/SliderMain/interfaces/IPropsSliderMain';

export interface IPropsItemData {
  items: IPropsSliderMain,
  loading: boolean,
  customError: string | null | undefined;
  inputValue: string,
}
