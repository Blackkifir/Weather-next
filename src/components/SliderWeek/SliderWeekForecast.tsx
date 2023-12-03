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
            <div className={styles.slider__blockTable}>
              <span className={styles.slider__blockTable__day}>Today</span>
              <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
              <p className={styles.slider__blockTable__text}>{mintemp_c}</p>
              <p className={styles.slider__blockTable__text}>{avgtemp_c}</p>
              <p className={styles.slider__blockTable__text}>{maxtemp_c}</p>
            </div>
            <div className={styles.slider__blockTable}>
              <span className={styles.slider__blockTable__day}>Friday</span>
              <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
              <p className={styles.slider__blockTable__text}>{mintemp_c}</p>
              <p className={styles.slider__blockTable__text}>{avgtemp_c}</p>
              <p className={styles.slider__blockTable__text}>{maxtemp_c}</p>
            </div>
            <div className={styles.slider__blockTable}>
              <span className={styles.slider__blockTable__day}>Saturday</span>
              <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
              <p className={styles.slider__blockTable__text}>{mintemp_c}</p>
              <p className={styles.slider__blockTable__text}>{avgtemp_c}</p>
              <p className={styles.slider__blockTable__text}>{maxtemp_c}</p>
            </div>
            <div className={styles.slider__blockTable}>
              <span className={styles.slider__blockTable__day}>Sunday</span>
              <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
              <p className={styles.slider__blockTable__text}>{mintemp_c}</p>
              <p className={styles.slider__blockTable__text}>{avgtemp_c}</p>
              <p className={styles.slider__blockTable__text}>{maxtemp_c}</p>
            </div>
            <div className={styles.slider__blockTable}>
              <span className={styles.slider__blockTable__day}>Monday</span>
              <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
              <p className={styles.slider__blockTable__text}>{mintemp_c}</p>
              <p className={styles.slider__blockTable__text}>{avgtemp_c}</p>
              <p className={styles.slider__blockTable__text}>{maxtemp_c}</p>
            </div>
            <div className={styles.slider__blockTable}>
              <span className={styles.slider__blockTable__day}>Tuesday</span>
              <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
              <p className={styles.slider__blockTable__text}>{mintemp_c}</p>
              <p className={styles.slider__blockTable__text}>{avgtemp_c}</p>
              <p className={styles.slider__blockTable__text}>{maxtemp_c}</p>
            </div>
            <div className={styles.slider__blockTable}>
              <span className={styles.slider__blockTable__day}>Wednesday</span>
              <Image src={`http:${icon}`} width={25} height={25} alt="cloudsImg" />
              <p className={styles.slider__blockTable__text}>{mintemp_c}</p>
              <p className={styles.slider__blockTable__text}>{avgtemp_c}</p>
              <p className={styles.slider__blockTable__text}>{maxtemp_c}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
