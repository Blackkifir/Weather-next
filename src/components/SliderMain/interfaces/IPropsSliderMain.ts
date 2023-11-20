export interface IPropsSliderMain {
  location: {
    name: string,
    region: string,
    localtime: string
    country: string
  },

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
  }
}

export interface IPropsSliderProperties {
  name: string,
  region: string,
  localtime: string,
  country: string,
  last_updated: string,
  temp_c: number,
  temp_f: number,
  humidity: number,
  pressure_mb: number,
  wind_mph: number,
  wind_kph: number,
  vis_km: number,
  vis_miles: number,
  text: string,
  icon: string,
}
