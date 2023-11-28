import Image from 'next/image';

import { IPropsSliderProperties } from '@/components/SliderMain/interfaces/IPropsSliderMain';

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
  pressure_mb,
  wind_mph,
  icon,
}: IPropsSliderProperties) {
  const sliderMainProportions = [
    { title: 'Humidity', proportions: `${humidity}%` },
    { title: 'Visiblity', proportions: `${vis_km}km` },
    { title: 'Air Pressure', proportions: `${pressure_mb}hpa` },
    { title: 'Wind', proportions: `${wind_mph}mph` },
  ];

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
          {sliderMainProportions.map((obj) => (
            <ul key={obj.title} className={styles.blockBottom__list}>
              <li className={styles.blockBottom__list__text}>{obj.title}</li>
              <li className={styles.blockBottom__list__properties}>{obj.proportions}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
