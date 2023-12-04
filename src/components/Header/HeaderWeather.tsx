import Image from 'next/image';
import moment from 'moment';

import { setActiveIndex } from '@/redux/slice/weatherSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import { IPropsHeader } from './interfaces/IPropsHeader';
import { forecastDaysButton } from '../../Constants/ConstantsData';

import logo from '../../../public/logo.jpg';
import styles from './HeaderWeather.module.scss';

export default function Header({ localtime }: IPropsHeader) {
  const dispatch = useDispatch();
  const { activeIndex } = useAppSelector((state: RootState) => state.weatherSlice);
  const timeSliceStr = moment(localtime).format('HH:mm');
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
