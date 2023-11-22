import Image from 'next/image';
import temperatureAdditions from '../../img/temperatureAdditions.svg';
import precipitationImg from '../../img/precipitation.svg';
import windImg from '../../img/wind.svg';
import uvIndex from '../../img/uvIndex.svg';

import styles from './SliderAdditionsW.module.scss';
import { IPropsSliderProperties } from '../SliderMain/interfaces/IPropsSliderMain';

export default function SliderAdditions({
  tz_id,
  last_updated,
  feelslike_c,
  precip_mm,
  uv,
  gust_mph,
}: IPropsSliderProperties) {
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
                <hr />
              </p>
              <p className={styles.leftBlock__block__item}>
                <Image src={...temperatureAdditions} width={25} height={25} alt="temperatureImg" />
                {feelslike_c}
                °C
              </p>
            </div>
            <div className={styles.leftBlock__block}>
              <p className={styles.leftBlock__block__text}>
                Wind speed
                <hr />
              </p>
              <p className={styles.leftBlock__block__item}>
                <Image src={...windImg} width={25} height={25} alt="temperatureImg" />
                {gust_mph}
                kph
              </p>
            </div>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.rightBlock__block}>
              <p className={styles.rightBlock__block__text}>
                Precipitation
                <hr />
              </p>
              <p className={styles.rightBlock__block__item}>
                <Image src={...precipitationImg} width={25} height={20} alt="precipitationImg" />
                {precip_mm}
                mm
              </p>
            </div>
            <div className={styles.rightBlock__block}>
              <p className={styles.rightBlock__block__text}>
                UV-index
                <hr />
              </p>
              <p className={styles.rightBlock__block__item}>
                <Image src={...uvIndex} width={25} height={25} alt="temperatureImg" />
                {uv}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
