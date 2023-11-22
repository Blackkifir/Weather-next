import Image from 'next/image';

import { IPropsSliderProperties } from '@/components/SliderMain/interfaces/IPropsSliderMain';

import placeImg from '../../img/longLine.svg';
import temperatureImg from '../../img/temperature.svg';

import styles from './SliderMainW.module.scss';

export default function SliderMain({
  name,
  localtime,
  country,
  temp_c,
  humidity,
  vis_km,
  pressure_mb,
  wind_mph,
  // text,
  icon,
}: IPropsSliderProperties) {
  return (
    <div className={styles.parent}>
      <div className={styles.slider}>
        <div className={styles.blockTop}>
          <div>
            <h3 className={styles.blockTop__title}>
              {name}
              <Image src={...placeImg} className={styles.placeImg} alt="not-found" />
            </h3>
            <p className={styles.blockTop__date}>{localtime}</p>
          </div>
          <h4 className={styles.blockTop__country}>
            {country}
            <hr className={styles.underLine} />
          </h4>
        </div>
        <div className={styles.blockCenter}>
          <Image src={...temperatureImg} alt="temperatureImg" />
          <span className={styles.blockCenter__degrees}>
            {temp_c}
            °C
          </span>
          <Image src={`https:${icon}`} width={70} height={70} alt="cloudsImg" />
        </div>
        <div className={styles.blockBottom}>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Humidity</li>
            <li className={styles.blockBottom__list__properties}>
              {humidity}
              %
            </li>
          </ul>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Visiblity</li>
            <li className={styles.blockBottom__list__properties}>
              {vis_km}
              km
            </li>
          </ul>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Air Pressure</li>
            <li className={styles.blockBottom__list__properties}>
              {pressure_mb}
              hpa
            </li>
          </ul>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Wind</li>
            <li className={styles.blockBottom__list__properties}>
              {wind_mph}
              mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
