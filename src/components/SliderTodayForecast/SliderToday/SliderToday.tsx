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
  pressure_mb,
  wind_kph,
  icon,
}: IPropsSliderMain) {
  const { knockValue } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const conversationFahrenheit = (celsius: number) => (Math.round(celsius) * 9) / 5 + 32;

  if (!icon) {
    return null;
  }

  const todayList = [
    { title: 'Humidity', proportions: `${humidity}%` },
    { title: 'Visibility', proportions: `${vis_km}km` },
    { title: 'Air Pressure', proportions: `${pressure_mb}hpa` },
    { title: 'Wind', proportions: `${wind_kph}kph` },
  ];

  return (
    <div className={styles.parent}>
      <div className={styles.slider}>
        <div className={styles.blockTop}>
          <div className={styles.blockTop__flex}>
            <h3 className={styles.blockTop__title}>
              {name}
              /
              {country}
            </h3>
            <Image src={...placeImg} className={styles.placeImg} alt="not-found" />
          </div>
          <p className={styles.blockTop__date}>{localtime}</p>
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
          {todayList.map((obj) => (
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
  );
}
