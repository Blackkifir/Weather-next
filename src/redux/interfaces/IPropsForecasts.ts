export interface IPropsForecastAll {
  current: {
    last_updated: string,
    temp_c: number,
    temp_f: number,
    humidity: number,
    pressure_mb: number,
    wind_mph: number,
    wind_kph: number,
    vis_km: number,
    vis_miles: number,
    condition: {
      text: string,
      icon: string,
    }
    precip_mm: number,
    feelslike_c: number,
    uv: number,
    gust_mph: number
  },
  forecast: {
    forecastday: [
      {
        date: string,
        day: {
          avghumidity: number,
          avgtemp_c: number,
          avgvis_km: number,
          avgvis_miles: number,
          condition: {
            icon: string,
            text: string
          },
          maxtemp_c: number,
          maxwind_kph: number,
          maxwind_mph: number,
          mintemp_c: number,
          totalprecip_in: number,
          totalprecip_mm: number,
          uv: number,
        },
        hour: [
          {
            time: string,
            temp_c: number,
            condition: {
              text: string,
              icon: string,
            },
            pressure_mb: number,
            pressure_in: number,
          },
        ],
      },
    ]
  },
  location: {
    name: string,
    region: string,
    localtime: string,
    country: string,
    tz_id: string,
  },
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'fulfilled',
  ERROR = 'error',
}
