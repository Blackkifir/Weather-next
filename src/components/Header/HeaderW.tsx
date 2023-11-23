import Image from 'next/image';

import { setActiveIndex } from '@/redux/slice/weatherSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import logo from '../../img/weather-logo.svg';

import styles from './HeaderW.module.scss';

export default function Header() {
  const dispatch = useDispatch();
  const { activeIndex } = useAppSelector((state: RootState) => state.weatherSlice);

  const onClickForecast = (activeNumber: number) => {
    dispatch(setActiveIndex(activeNumber));
  };

  return (
    <header>
      <Image className={styles.logo} src={...logo} width={100} height={100} alt="not-found" />
      <nav className={styles.navigation}>
        <div className={styles.flexBox}>
          <div className={styles.leftBlock}>
            <h1 className="header-title">WeatherMe</h1>
            <p>21:00 pm</p>
          </div>
          <ul className="header-list">
            <li>
              <button
                type="button"
                onClick={() => onClickForecast(1)}
                className={`item-list ${activeIndex === 1 ? styles.active : ''}`}
              >
                Today
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onClickForecast(2)}
                className={`item-list ${activeIndex === 2 ? styles.active : ''}`}
              >
                Tommorow
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onClickForecast(3)}
                className={`item-list ${activeIndex === 3 ? styles.active : ''}`}
              >
                Monthly Forecast
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
