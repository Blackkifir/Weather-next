export interface IPropsForecastAll {
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
  }
}

export interface IPropsForecastProperties {
  name?: string,
  country?: string,
  date: string,
  avghumidity: number,
  avgtemp_c: number,
  avgvis_km: number,
  avgvis_miles: number,
  icon: string,
  text: string,
  maxtemp_c: number,
  maxwind_kph: number,
  maxwind_mph: number,
  mintemp_c: number,
  totalprecip_in: number,
  totalprecip_mm: number,
  uv: number,
  pressure_mb: number,
  pressure_in: number,
}
