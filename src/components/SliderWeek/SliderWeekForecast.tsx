import Image from 'next/image';

import { IPropsWeekForecast } from './interfaces/IPropsWeekForecast';
import weekImg from '../../icons/week.ico';

import styles from './SliderWeek.module.scss';

export default function SliderWeekForecast({
  icon,
  mintemp_c,
  avgtemp_c,
  maxtemp_c,
}: IPropsWeekForecast) {
  const forecastWeekBlockTable = [
    {
      title: 'Today', image: icon, mintemp_c, avgtemp_c, maxtemp_c,
    },
    {
      title: 'Tuesday', image: icon, mintemp_c, avgtemp_c, maxtemp_c,
    },
    {
      title: 'Wednesday', image: icon, mintemp_c, avgtemp_c, maxtemp_c,
    },
    {
      title: 'Thursday', image: icon, mintemp_c, avgtemp_c, maxtemp_c,
    },
    {
      title: 'Friday', image: icon, mintemp_c, avgtemp_c, maxtemp_c,
    },
    {
      title: 'Saturday', image: icon, mintemp_c, avgtemp_c, maxtemp_c,
    },
    {
      title: 'Sunday', image: icon, mintemp_c, avgtemp_c, maxtemp_c,
    },
  ];

  if (!icon) {
    return null;
  }
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.slider}>
          <div className={styles.slider__blockTop}>
            <Image src={weekImg} width={25} height={25} alt="weekImg" />
            <h3 className={styles.slider__blockTop__title}>Forecast for a week</h3>
          </div>
          <div className={styles.slider__flexBox}>
            {forecastWeekBlockTable.map((obj) => (
              <div key={obj.title} className={styles.slider__blockTable}>
                <span className={styles.slider__blockTable__day}>{obj.title}</span>
                <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
                <p className={styles.slider__blockTable__text}>{obj.mintemp_c}</p>
                <p className={styles.slider__blockTable__text}>{obj.avgtemp_c}</p>
                <p className={styles.slider__blockTable__text}>{obj.maxtemp_c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
