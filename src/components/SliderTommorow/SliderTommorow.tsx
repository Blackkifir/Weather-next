import Image from 'next/image';
import { IPropsForecastProperties } from '@/redux/interfaces/IPropsForecasts';

import placeImg from '../../icons/longLine.svg';
import temperatureImg from '../../icons/temperature.svg';

import styles from './SliderTommorow.module.scss';

export default function SliderTommorow({
  name,
  country,
  date,
  avghumidity,
  avgtemp_c,
  avgvis_km,
  avgvis_miles,
  icon,
  maxwind_kph,
  maxwind_mph,
  pressure_mb,
  pressure_in,
}: IPropsForecastProperties) {
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.slider}>
          <div className={styles.blockTop}>
            <div>
              <h3 className={styles.blockTop__title}>
                {name}
                <Image src={...placeImg} className={styles.placeImg} alt="not-found" />
              </h3>
              <p className={styles.blockTop__date}>{date}</p>
            </div>
            <h4 className={styles.blockTop__country}>
              {country}
              <hr className={styles.underLine} />
            </h4>
          </div>
          <div className={styles.blockCenter}>
            <Image src={...temperatureImg} alt="temperatureImg" />
            <span className={styles.blockCenter__degrees}>
              {avgtemp_c}
              °C
            </span>
            <Image src={`https:${icon}`} width={70} height={70} alt="cloudsImg" />
          </div>
          <div className={styles.blockBottom}>
            <ul className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>Humidity</li>
              <select className={styles.blockBottom__list__selects}>
                <option className={styles.blockBottom__list__proportions}>
                  {avghumidity}
                  %
                </option>
              </select>
            </ul>
            <ul className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>Visibility</li>
              <select className={styles.blockBottom__list__selects}>
                <option className={styles.blockBottom__list__proportions}>
                  {avgvis_km}
                  km
                </option>
                <option className={styles.blockBottom__list__proportions}>
                  {avgvis_miles}
                  -miles
                </option>
              </select>
            </ul>
            <ul className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>Air Pressure</li>
              <select className={styles.blockBottom__list__selects}>
                <option className={styles.blockBottom__list__proportions}>
                  {pressure_mb}
                  mb
                </option>
                <option className={styles.blockBottom__list__proportions}>
                  {pressure_in}
                  in
                </option>
              </select>
            </ul>
            <ul className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>Wind</li>
              <select className={styles.blockBottom__list__selects}>
                <option className={styles.blockBottom__list__proportions}>
                  {maxwind_kph}
                  kph
                </option>
                <option className={styles.blockBottom__list__proportions}>
                  {maxwind_mph}
                  mph
                </option>
              </select>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
