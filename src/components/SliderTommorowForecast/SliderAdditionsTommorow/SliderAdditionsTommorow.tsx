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
              <Image src={...temperatureAdditions} width={25} height={25} alt="temperatureImg" />
              <p className={styles.leftBlock__block__item}>
                {feelslike}
                °
              </p>
            </div>
            <div className={styles.leftBlock__block}>
              <p className={styles.leftBlock__block__text}>
                Wind speed
              </p>
              <Image src={...windImg} width={25} height={25} alt="temperatureImg" />
              <p className={styles.leftBlock__block__item}>
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
              <Image src={...precipitationImg} width={25} height={20} alt="precipitationImg" />
              <p className={styles.rightBlock__block__item}>
                {precipcover}
                mm
              </p>
            </div>
            <div className={styles.rightBlock__block}>
              <p className={styles.rightBlock__block__text}>
                UV-index
              </p>
              <Image src={...uvIndex} width={25} height={25} alt="uvImg" />
              <p className={styles.rightBlock__block__item}>
                {uvindex}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
