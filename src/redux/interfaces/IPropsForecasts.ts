export interface IPropsForecastAll {
  current: {
    last_updated: string,
    temp_c: number,
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
