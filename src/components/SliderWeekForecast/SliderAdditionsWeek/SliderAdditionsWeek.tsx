import Image from 'next/image';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import { IPropsAdditionsWeek } from './interfaces/IPropsAdditionsWeek';

import weekImg from '../../../icons/week.ico';
import temperatureAdditions from '../../../icons/temperatureAdditions.svg';
import precipitationImg from '../../../icons/precipitation.svg';
import windImg from '../../../icons/wind.svg';
import uvIndex from '../../../icons/uvIndex.svg';

import styles from './SliderAdditionsWeek.module.scss';

export default function SliderAdditionsWeek({ tz_id }: IPropsAdditionsWeek) {
  const { weekItems } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const weekForecast = weekItems.days;
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.slider}>
          <div className={styles.slider__blockTop}>
            <div className={styles.slider__blockTop__block}>
              <Image src={weekImg} width={25} height={25} alt="weekImg" />
              <h3 className={styles.slider__blockTop__title}>Forecast for a week additions</h3>
            </div>
            <div className={styles.slider__blockTop__block}>
              <p className={styles.slider__blockTop__continent}>{tz_id}</p>
            </div>
          </div>
          <div className={styles.slider__flexBox}>
            {weekForecast.map((obj) => (
              <div key={obj.datetime} className={styles.slider__blockTable}>
                <span className={styles.slider__blockTable__day}>{obj.datetime}</span>
                <p className={styles.slider__blockTable__text}>
                  <Image src={...temperatureAdditions} width={15} height={15} alt="temperatureImg" />
                  feelslike
                  {obj.feelslike}
                  °C
                </p>
                <p className={styles.slider__blockTable__text}>
                  <Image src={...windImg} width={15} height={15} alt="temperatureImg" />
                  wind
                  {obj.windspeed}
                  kph
                </p>
                <p className={styles.slider__blockTable__text}>
                  <Image src={...precipitationImg} width={15} height={15} alt="precipitationImg" />
                  precipitation
                  {obj.precipcover}
                  mm
                </p>
                <p className={styles.slider__blockTable__text}>
                  <Image src={...uvIndex} width={15} height={15} alt="uvImg" />
                  uv-index-
                  {obj.uvindex}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
