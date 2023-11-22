import Image from 'next/image';
import temperatureAdditions from '../../img/temperatureAdditions.svg';
import precipitationImg from '../../img/precipitation.svg';
import windImg from '../../img/wind.svg';
import uvIndex from '../../img/uvIndex.svg';

import styles from './SliderAdditionsW.module.scss';

export default function SliderAdditions() {
  return (
    <div className={styles.parent}>
      <div className={styles.slider}>
        <div className={styles.blockTop}>
          <h3 className={styles.blockTop__title}>oblast</h3>
          <p className={styles.blockTop__data}>last_updated</p>
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
                0°C
              </p>
            </div>
            <div className={styles.leftBlock__block}>
              <p className={styles.leftBlock__block__text}>
                Wind speed
                <hr />
              </p>
              <p className={styles.leftBlock__block__item}>
                <Image src={...windImg} width={25} height={25} alt="temperatureImg" />
                0 kph
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
                0 mm
              </p>
            </div>
            <div className={styles.rightBlock__block}>
              <p className={styles.rightBlock__block__text}>
                UV-index
                <hr />
              </p>
              <p className={styles.rightBlock__block__item}>
                <Image src={...uvIndex} width={25} height={25} alt="temperatureImg" />
                0 low
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
