import Image from 'next/image';

import { setActiveIndex } from '@/redux/slice/weatherSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';
import { IPropsSliderProperties } from '../SliderMain/interfaces/IPropsSliderMain';

import logo from '../../../public/logo.jpg';
import styles from './HeaderWeather.module.scss';

export default function Header({ localtime }: IPropsSliderProperties) {
  const dispatch = useDispatch();
  const { activeIndex } = useAppSelector((state: RootState) => state.weatherSlice);
  const timeSliceStr = localtime ? `${localtime.slice(11, 16)}pm` : '';

  const forecastDaysButton = [
    { index: 1, label: 'Today' },
    { index: 2, label: 'Tommorow' },
    { index: 3, label: 'Monthly Forecast' },
  ];

  const onClickForecast = (activeNumber: number) => {
    dispatch(setActiveIndex(activeNumber));
  };

  return (
    <header>
      <Image src={logo} className={styles.logo} alt="logoImg" />
      <nav className={styles.navigation}>
        <div className={styles.flexBox}>
          <div className={styles.leftBlock}>
            <h1 className="header-title">
              WeatherMe
            </h1>
            <p>
              {timeSliceStr}
            </p>
          </div>
          <ul className="header-list">
            {forecastDaysButton.map((button) => (
              <li key={button.index}>
                <button
                  type="button"
                  className={`item-list ${activeIndex === button.index ? styles.active : ''}`}
                  onClick={() => onClickForecast(button.index)}
                >
                  {button.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
