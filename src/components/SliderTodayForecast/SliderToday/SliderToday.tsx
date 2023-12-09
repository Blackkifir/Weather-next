import Image from 'next/image';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';
import { IPropsSliderMain } from './interfaces/IPropsSliderMain';
import placeImg from '../../../icons/longLine.svg';
import temperatureImg from '../../../icons/temperature.svg';

import styles from './SliderToday.module.scss';

export default function SliderToday({
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
  const { knockValue } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const conversationFahrenheit = (celsius: number) => (Math.round(celsius) * 9) / 5 + 32;

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
          <Image src={...temperatureImg} className={styles.blockCenter__temperatureImg} alt="temperatureImg" />
          <span className={styles.blockCenter__degrees}>
            {knockValue ? conversationFahrenheit(temp_c) : temp_c}
            °
          </span>
          <Image
            src={`https:${icon}`}
            width={70}
            height={70}
            className={styles.blockCenter__cloudsImg}
            alt="cloudsImg"
          />
        </div>
        <div className={styles.blockBottom}>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Humidity</li>
            <select name="selects" className={styles.blockBottom__list__selects}>
              <option className={styles.blockBottom__list__proportions}>
                {humidity}
                %
              </option>
            </select>
          </ul>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Visibility</li>
            <select name="selects" className={styles.blockBottom__list__selects}>
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
            <select name="selects" className={styles.blockBottom__list__selects}>
              <option className={styles.blockBottom__list__proportions}>
                {pressure_mb}
                hpa
              </option>
            </select>
          </ul>
          <ul className={styles.blockBottom__list}>
            <li className={styles.blockBottom__list__text}>Wind</li>
            <select name="selects" className={styles.blockBottom__list__selects}>
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
