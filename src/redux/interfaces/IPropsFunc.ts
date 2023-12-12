export interface IPropsChangeInput {
  onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClose: () => void;
  inputValue: string,
}

export interface IPropsOnIsClickTemp {
  onIsClickTemp: () => void;
}
