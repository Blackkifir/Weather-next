interface IPropsWidgetsHour {
  time: string,
  temp_c: number,
  condition: {
    text: string,
    icon: string,
  }
}
export interface IPropsWidgetsDay {
  hour: IPropsWidgetsHour[],
}
export interface IPropsWidgetsAll {
  hour: IPropsWidgetsHour[],
  forecast: {
    forecastday: IPropsWidgetsDay[]
  }
}
export interface IPropsWidgetsProperties {
  time: string,
  temp_c: number,
  text: string,
  icon: string,
}
