import Image from 'next/image';

import { IPropsAdditionsTommorow } from './interfaces/IPropsAdditionsTommorow';

import temperatureAdditions from '../../../icons/temperatureAdditions.svg';
import precipitationImg from '../../../icons/precipitation.svg';
import windImg from '../../../icons/wind.svg';
import uvIndex from '../../../icons/uvIndex.svg';

import styles from './SliderAdditionsTommorow.module.scss';

export default function SliderAdditionsTommorow({
  tz_id,
  last_updated,
  feelslike,
  precipcover,
  uvindex,
  windspeed,
}: IPropsAdditionsTommorow) {
  return (
    <div className={styles.parent}>
      <div className={styles.slider}>
        <div className={styles.blockTop}>
          <h3 className={styles.blockTop__title}>{tz_id}</h3>
          <p className={styles.blockTop__date}>
            <span className={styles.blockTop__date__margin}>last update date:</span>
            {last_updated}
          </p>
        </div>
        <div className={styles.flexBox}>
          <div className={styles.leftBlock}>
            <div className={styles.leftBlock__block}>
              <p className={styles.leftBlock__block__text}>
                How it feels
              </p>
              <p className={styles.leftBlock__block__item}>
                <Image src={...temperatureAdditions} width={25} height={25} alt="temperatureImg" />
                {feelslike}
                °C
              </p>
            </div>
            <div className={styles.leftBlock__block}>
              <p className={styles.leftBlock__block__text}>
                Wind speed
              </p>
              <p className={styles.leftBlock__block__item}>
                <Image src={...windImg} width={25} height={25} alt="temperatureImg" />
                {windspeed}
                kph
              </p>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.rightBlock__block}>
              <p className={styles.rightBlock__block__text}>
                Precipitation
              </p>
              <p className={styles.rightBlock__block__item}>
                <Image src={...precipitationImg} width={25} height={20} alt="precipitationImg" />
                {precipcover}
                mm
              </p>
            </div>
            <div className={styles.rightBlock__block}>
              <p className={styles.rightBlock__block__text}>
                UV-index
              </p>
              <p className={styles.rightBlock__block__item}>
                <Image src={...uvIndex} width={25} height={25} alt="uvImg" />
                {uvindex}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
