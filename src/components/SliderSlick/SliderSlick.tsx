import React from 'react';
import Slider from 'react-slick';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import SliderMain from '../SliderMain/SliderMain';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderAdditions from '../SliderAdditions/SliderAdditionW';
import SliderTommorow from '../SliderTommorow/SliderTommorow';

export default function SliderSlick() {
  const { items, activeIndex } = useAppSelector((state: RootState) => state.weatherSlice);
  const { widgetsData } = useAppSelector((state: RootState) => state.widgetsSlice);
  const forecastDay = widgetsData.forecast.forecastday[0];

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
        { activeIndex === 1
          ? (
            <SliderMain
              name={items.location.name}
              region={items.location.region}
              localtime={items.location.localtime}
              country={items.location.country}
              last_updated={items.current.last_updated}
              temp_c={items.current.temp_c}
              temp_f={items.current.temp_f}
              humidity={items.current.humidity}
              pressure_mb={items.current.pressure_mb}
              wind_kph={items.current.wind_kph}
              wind_mph={items.current.wind_mph}
              vis_km={items.current.vis_km}
              vis_miles={items.current.vis_miles}
              text={items.current.condition.text}
              icon={items.current.condition.icon}
            />
          ) : activeIndex === 2
          && (
            <SliderTommorow
              name={items.location.name}
              country={items.location.country}
              date={forecastDay.date}
              avghumidity={forecastDay.day.avghumidity}
              avgtemp_c={forecastDay.day.avgtemp_c}
              avgvis_km={forecastDay.day.avgvis_km}
              avgvis_miles={forecastDay.day.avgvis_miles}
              icon={forecastDay.day.condition.icon}
              text={forecastDay.day.condition.text}
              maxtemp_c={forecastDay.day.maxtemp_c}
              maxwind_kph={forecastDay.day.maxwind_kph}
              maxwind_mph={forecastDay.day.maxwind_mph}
              mintemp_c={forecastDay.day.mintemp_c}
              totalprecip_in={forecastDay.day.totalprecip_in}
              totalprecip_mm={forecastDay.day.totalprecip_mm}
              uv={forecastDay.day.uv}
              pressure_mb={forecastDay.hour[0].pressure_mb}
              pressure_in={forecastDay.hour[0].pressure_in}
            />
          ) }
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
