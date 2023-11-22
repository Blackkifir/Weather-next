export interface IPropsSliderMain {
  location: {
    name?: string,
    region?: string,
    localtime?: string
    country?: string,
    tz_id?: string,
  },

  current: {
    last_updated?: string,
    temp_c?: number,
    temp_f?: number,
    humidity?: number,
    pressure_mb?: number,
    wind_mph?: number,
    wind_kph?: number,
    vis_km?: number,
    vis_miles?: number,
    condition: {
      text?: string,
      icon?: string,
    }
    precip_mm?: number,
    feelslike_c?: number,
    uv?: number,
    gust_mph?: number
  }
}

export interface IPropsSliderProperties {
  name?: string,
  region?: string,
  localtime?: string,
  country?: string,
  last_updated?: string,
  temp_c?: number,
  temp_f?: number,
  humidity?: number,
  pressure_mb?: number,
  wind_mph?: number,
  wind_kph?: number,
  vis_km?: number,
  vis_miles?: number,
  text?: string,
  icon?: string,
  tz_id?: string,
  precip_mm?: number,
  feelslike_c?: number,
  uv?: number,
  gust_mph?: number
}
