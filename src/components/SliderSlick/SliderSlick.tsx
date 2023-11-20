import React from 'react';
import Slider from 'react-slick';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import SliderMain from '../SliderMain/SliderMainW';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderSlick() {
  const { items } = useAppSelector((state: RootState) => state.weatherSlice);
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
          wind_mph={items.current.wind_mph}
          wind_kph={items.current.wind_kph}
          vis_km={items.current.vis_km}
          vis_miles={items.current.vis_miles}
          text={items.current.condition.text}
          icon={items.current.condition.icon}
        />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
}
