import Image from 'next/image';

import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';
import { IPropsSliderTommorowAll } from './interfaces/IPropsSliderTommorow';

import placeImg from '../../../icons/longLine.svg';
import temperatureImg from '../../../icons/temperature.svg';

import styles from './SliderTommorow.module.scss';

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
  const { knockValue } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const conversationFahrenheit = (celsius: number) => (Math.round(celsius) * 9) / 5 + 32;

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
              {knockValue ? conversationFahrenheit(temp) : temp}
              °
            </span>
            <Image src={`https:${iconSlider}`} width={70} height={70} alt="cloudsImg" />
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
                  {visibility}
                  km
                </option>
              </select>
            </ul>
            <ul className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>Air Pressure</li>
              <select name="selects" className={styles.blockBottom__list__selects}>
                <option className={styles.blockBottom__list__proportions}>
                  {pressure}
                  hpa
                </option>
              </select>
            </ul>
            <ul className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>Wind</li>
              <select name="selects" className={styles.blockBottom__list__selects}>
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
