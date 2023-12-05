import Image from 'next/image';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';
import { IPropsWeekForecast } from './interfaces/IPropsWeekForecast';
import weekImg from '../../../icons/week.ico';

import styles from './SliderWeek.module.scss';

export default function SliderWeekForecast({
  icon,
  country,
  name,
}: IPropsWeekForecast) {
  const { weekItems } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const weekForecast = weekItems.days;
  if (!icon) {
    return null;
  }
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.slider}>
          <div className={styles.slider__blockTop}>
            <div className={styles.slider__blockTop__block}>
              <Image src={weekImg} width={25} height={25} alt="weekImg" />
              <h3 className={styles.slider__blockTop__title}>Forecast for a week</h3>
            </div>
            <div className={styles.slider__blockTop__block}>
              <p className={styles.slider__blockTop__city}>{`${name}/`}</p>
              <p className={styles.slider__blockTop__country}>{country}</p>
            </div>
          </div>
          <div className={styles.slider__flexBox}>
            {weekForecast.map((obj) => (
              <div key={obj.datetime} className={styles.slider__blockTable}>
                <span className={styles.slider__blockTable__day}>{obj.datetime}</span>
                <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
                <p className={styles.slider__blockTable__text}>
                  {obj.temp}
                  °C
                </p>
                <p className={styles.slider__blockTable__text}>
                  {obj.humidity}
                  %
                </p>
                <p className={styles.slider__blockTable__text}>
                  {obj.visibility}
                  km
                </p>
                <p className={styles.slider__blockTable__text}>
                  {obj.pressure}
                  hpa
                </p>
                <p className={styles.slider__blockTable__text}>
                  {obj.windspeed}
                  kph
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
