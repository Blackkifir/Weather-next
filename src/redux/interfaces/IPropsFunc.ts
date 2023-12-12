export interface IPropsChangeInput {
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClose: () => void;
  inputValue: string,
}

export interface IPropsOnIsClickTemp {
  onIsClickTemp: () => void;
}
