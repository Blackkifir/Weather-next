export interface IPropsWeekAll {
  icon: string;
  address: string,
  timezone: string,
  days: [
    {
      datetime: string,
      feelslike: string,
      hours: [
        {
          conditions: string;
          datetime: string,
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
