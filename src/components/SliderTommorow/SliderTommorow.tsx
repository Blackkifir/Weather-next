import Image from 'next/image';

import placeImg from '../../icons/longLine.svg';
import temperatureImg from '../../icons/temperature.svg';

import styles from './SliderTommorow.module.scss';
import { IPropsSliderTommorowAll } from './interfaces/IPropsSliderTommorow';

export default function SliderTommorow({
  nameAddress,
  dateDay,
  iconSlider,
  visibility,
  windspeed,
  pressure,
  humidity,
  temp,
  country,
}: IPropsSliderTommorowAll) {
  if (!iconSlider) {
    return null;
  }
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.slider}>
          <div className={styles.blockTop}>
            <div>
              <h3 className={styles.blockTop__title}>
                {nameAddress}
                <Image src={...placeImg} className={styles.placeImg} alt="not-found" />
              </h3>
              <p className={styles.blockTop__date}>{dateDay}</p>
            </div>
            <h4 className={styles.blockTop__country}>
              {country}
              <hr className={styles.underLine} />
            </h4>
          </div>
          <div className={styles.blockCenter}>
            <Image src={...temperatureImg} alt="temperatureImg" />
            <span className={styles.blockCenter__degrees}>
              {temp}
              °C
            </span>
            <Image src={`https:${iconSlider}`} width={70} height={70} alt="cloudsImg" />
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
                  {visibility}
                  km
                </option>
              </select>
            </ul>
            <ul className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>Air Pressure</li>
              <select className={styles.blockBottom__list__selects}>
                <option className={styles.blockBottom__list__proportions}>
                  {pressure}
                  hpa
                </option>
              </select>
            </ul>
            <ul className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>Wind</li>
              <select className={styles.blockBottom__list__selects}>
                <option className={styles.blockBottom__list__proportions}>
                  {windspeed}
                  kph
                </option>
              </select>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
