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

  const tommorowList = [
    { title: 'Humidity', proportions: `${humidity}%` },
    { title: 'Visibility', proportions: `${visibility}km` },
    { title: 'Air Pressure', proportions: `${pressure}hpa` },
    { title: 'Wind', proportions: `${windspeed}kph` },
  ];

  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.slider}>
          <div className={styles.blockTop}>
            <div className={styles.blockTop__flex}>
              <h3 className={styles.blockTop__title}>
                {nameAddress}
                /
                {country}
              </h3>
              <Image src={...placeImg} className={styles.placeImg} alt="not-found" />
            </div>
            <p className={styles.blockTop__date}>{dateDay}</p>
          </div>
          <div className={styles.blockCenter}>
            <Image src={...temperatureImg} className={styles.blockCenter__temperatureImg} alt="temperatureImg" />
            <span className={styles.blockCenter__degrees}>
              {knockValue ? conversationFahrenheit(temp) : temp}
              °
            </span>
            <Image
              src={`http:${iconSlider}`}
              width={70}
              height={70}
              className={styles.blockCenter__temperatureImg}
              alt="cloudsImg"
            />
          </div>
          <div className={styles.blockBottom}>
            {tommorowList.map((obj) => (
              <ul key={obj.title} className={styles.blockBottom__list}>
                <li className={styles.blockBottom__list__text}>{obj.title}</li>
                <p className={styles.blockBottom__list__proportions}>
                  {obj.proportions}
                </p>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
