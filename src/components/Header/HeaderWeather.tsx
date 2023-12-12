import Image from 'next/image';
import moment from 'moment';

import { setActiveIndex } from '@/redux/slice/weatherSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import { forecastDaysButton } from '@/Constants/ConstantsData';
import { IPropsHeader, IPropsHeaderBtn } from './interfaces/IPropsHeader';

import logo from '../../../public/logo.jpg';
import styles from './HeaderWeather.module.scss';

export default function Header({ localtime }: IPropsHeader) {
  const dispatch = useDispatch();
  const { activeIndex, isloading } = useAppSelector((state: RootState) => state.weatherSlice);
  moment.suppressDeprecationWarnings = true;
  const timeSliceStr = moment(localtime).format('HH:mm');

  const onClickForecast = (activeNumber: number) => {
    if (!isloading) {
      dispatch(setActiveIndex(activeNumber));
    }
  };

  return (
    <header className={styles.header}>
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
            {forecastDaysButton.map((button: IPropsHeaderBtn) => (
              <li key={button.index}>
                <button
                  disabled={button.disabled}
                  type="button"
                  className={`item-list ${!isloading && activeIndex === button.index ? styles.active
                    : button.disabled}`}
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
