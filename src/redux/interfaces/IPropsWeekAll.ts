export interface IPropsWeekAll {
  address: string,
  timezone: string,
  days: [
    {
      datetime: string,
      feelslike: string,
      hours: [
        {
          datetime: string,
          icon: string,
          temp: string,
        },
      ],
      humidity: number,
      icon: string,
      precipcover: string,
      pressure: string,
      temp: number,
      uvindex: number,
      visibility: number,
      windspeed: number,
    },
  ]
}
