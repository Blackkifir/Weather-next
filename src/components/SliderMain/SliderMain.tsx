import Image from 'next/image';

import { IPropsSliderMain } from './interfaces/IPropsSliderMain';
import placeImg from '../../icons/longLine.svg';
import temperatureImg from '../../icons/temperature.svg';

import styles from './SliderMain.module.scss';

export default function SliderMain({
  name,
  localtime,
  country,
  temp_c,
  humidity,
  vis_km,
  vis_miles,
  pressure_mb,
  wind_mph,
  wind_kph,
  icon,
}: IPropsSliderMain) {
  if (!icon) {
    return null;
  }
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
            <select className={styles.blockBottom__list__selects}>
              <option className={styles.blockBottom__list__proportions}>
                {humidity}
                %
              </option>
            </select>
          </ul>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Visibility</li>
            <select className={styles.blockBottom__list__selects}>
              <option className={styles.blockBottom__list__proportions}>
                {vis_km}
                km
              </option>
              <option className={styles.blockBottom__list__proportions}>
                {vis_miles}
                miles
              </option>
            </select>
          </ul>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Air Pressure</li>
            <select className={styles.blockBottom__list__selects}>
              <option className={styles.blockBottom__list__proportions}>
                {pressure_mb}
                hpa
              </option>
            </select>
          </ul>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Wind</li>
            <select className={styles.blockBottom__list__selects}>
              <option className={styles.blockBottom__list__proportions}>
                {wind_mph}
                mph
              </option>
              <option className={styles.blockBottom__list__proportions}>
                {wind_kph}
                kph
              </option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
}
