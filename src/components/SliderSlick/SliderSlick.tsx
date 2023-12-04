import React from 'react';
import Slider from 'react-slick';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import SliderMain from '../SliderMain/SliderMain';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderAdditions from '../SliderAdditions/SliderAdditionW';
import SliderTommorow from '../SliderTommorow/SliderTommorow';
import SliderWeekForecast from '../SliderWeek/SliderWeekForecast';

export default function SliderSlick() {
  const { items, activeIndex, isloading } = useAppSelector((state: RootState) => state.weatherSlice);
  const { weekItems } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const forecastDay = items.forecast.forecastday[0];
  const tommorowDay = weekItems.days[0 + 1];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider
      dots={settings.dots}
      infinite={settings.infinite}
      speed={settings.speed}
      slidesToShow={settings.slidesToShow}
      slidesToScroll={settings.slidesToScroll}
    >
      <div>
        {!isloading && activeIndex === 1 && (
        <SliderMain
          name={items.location.name}
          localtime={items.location.localtime}
          country={items.location.country}
          temp_c={items.current.temp_c}
          humidity={items.current.humidity}
          pressure_mb={items.current.pressure_mb}
          wind_kph={items.current.wind_kph}
          wind_mph={items.current.wind_mph}
          vis_km={items.current.vis_km}
          vis_miles={items.current.vis_miles}
          icon={items.current.condition.icon}
        />
        )}
        {!isloading && activeIndex === 2 && (
          <SliderTommorow
            nameAddress={weekItems.address}
            dateDay={tommorowDay.datetime}
            iconSlider={items.current.condition.icon}
            visibility={tommorowDay.visibility}
            windspeed={tommorowDay.windspeed}
            pressure={tommorowDay.pressure}
            humidity={tommorowDay.humidity}
            temp={tommorowDay.temp}
            country={items.location.country}
            // name={items.location.name}
            // country={items.location.country}
            // date={forecastDay.date}
            // avghumidity={forecastDay.day.avghumidity}
            // avgtemp_c={forecastDay.day.avgtemp_c}
            // avgvis_km={forecastDay.day.avgvis_km}
            // avgvis_miles={forecastDay.day.avgvis_miles}
            // icon={forecastDay.day.condition.icon}
            // maxwind_kph={forecastDay.day.maxwind_kph}
            // maxwind_mph={forecastDay.day.maxwind_mph}
            // pressure_mb={forecastDay.hour[0].pressure_mb}
            // pressure_in={forecastDay.hour[0].pressure_in}
          />
        )}
        {!isloading && activeIndex === 3 && (
        <SliderWeekForecast
          icon={forecastDay.day.condition.icon}
          mintemp_c={forecastDay.day.mintemp_c}
          avgtemp_c={forecastDay.day.mintemp_c}
          maxtemp_c={forecastDay.day.maxtemp_c}
        />
        )}
      </div>
      <div>
        <SliderAdditions
          tz_id={items.location.tz_id}
          last_updated={items.current.last_updated}
          precip_mm={items.current.precip_mm}
          feelslike_c={items.current.feelslike_c}
          uv={items.current.uv}
          gust_mph={items.current.gust_mph}
        />
      </div>
    </Slider>
  );
}
