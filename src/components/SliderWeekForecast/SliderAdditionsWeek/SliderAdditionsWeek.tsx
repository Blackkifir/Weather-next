import Image from 'next/image';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import { IPropsAdditionsWeek } from './interfaces/IPropsAdditionsWeek';

import weekImg from '../../../icons/week.ico';

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
                  feelslike-
                  {obj.feelslike}
                  °
                </p>
                <p className={styles.slider__blockTable__text}>
                  wind-
                  {obj.windspeed}
                  kph
                </p>
                <p className={styles.slider__blockTable__text}>
                  precipitation-
                  {obj.precipcover}
                  mm
                </p>
                <p className={styles.slider__blockTable__text}>
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
