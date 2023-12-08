export interface IPropsChangeInput {
  onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string,
}

export interface IPropsOnIsClickTemp {
  onIsClickTemp: () => void;
}
