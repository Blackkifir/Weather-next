import React from 'react';
import Slider from 'react-slick';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderToday from '../SliderTodayForecast/SliderToday/SliderToday';
import SliderAdditionsToday from '../SliderTodayForecast/SliderAdditionsToday/SliderAdditionsToday';
import SliderTommorow from '../SliderTommorowForecast/SliderTommorow/SliderTommorow';
import SliderWeek from '../SliderWeekForecast/SliderWeek/SliderWeek';
import SliderAdditionsTommorow from '../SliderTommorowForecast/SliderAdditionsTommorow/SliderAdditionsTommorow';
import SliderAdditionsWeek from '../SliderWeekForecast/SliderAdditionsWeek/SliderAdditionsWeek';

export default function SliderSlick() {
  const { items, activeIndex, isloading } = useAppSelector((state: RootState) => state.weatherSlice);
  const { weekItems } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const tommorowDay = weekItems.days[0 + 1];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let slidersRender;
  let slidersAdditionsRender;

  if (!isloading) {
    if (activeIndex === 1) {
      slidersRender = (
        <SliderToday
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
      );
    } else if (activeIndex === 2) {
      slidersRender = (
        <SliderTommorow
          dateDay={tommorowDay.datetime}
          iconSlider={items.current.condition.icon}
          visibility={tommorowDay.visibility}
          windspeed={tommorowDay.windspeed}
          pressure={tommorowDay.pressure}
          humidity={tommorowDay.humidity}
          temp={tommorowDay.temp}
          country={items.location.country}
          nameAddress={items.location.name}
        />
      );
    } else if (activeIndex === 3) {
      slidersRender = (
        <SliderWeek
          icon={items.current.condition.icon}
          country={items.location.country}
          name={items.location.name}
        />
      );
    }
  }

  if (!isloading) {
    if (activeIndex === 1) {
      slidersAdditionsRender = (
        <SliderAdditionsToday
          tz_id={items.location.tz_id}
          last_updated={items.current.last_updated}
          precip_mm={items.current.precip_mm}
          feelslike_c={items.current.feelslike_c}
          uv={items.current.uv}
          gust_mph={items.current.gust_mph}
        />
      );
    }
    if (activeIndex === 2) {
      slidersAdditionsRender = (
        <SliderAdditionsTommorow
          tz_id={items.location.tz_id}
          last_updated={items.current.last_updated}
          feelslike={tommorowDay.feelslike}
          precipcover={tommorowDay.precipcover}
          uvindex={tommorowDay.uvindex}
          windspeed={tommorowDay.windspeed}
        />
      );
    }
    if (activeIndex === 3) {
      slidersAdditionsRender = (
        <SliderAdditionsWeek
          tz_id={items.location.tz_id}
        />
      );
    }
  }

  return (
    <Slider
      dots={settings.dots}
      infinite={settings.infinite}
      speed={settings.speed}
      slidesToShow={settings.slidesToShow}
      slidesToScroll={settings.slidesToScroll}
    >
      <div>
        {slidersRender}
      </div>
      <div>
        {slidersAdditionsRender}
      </div>
    </Slider>
  );
}
