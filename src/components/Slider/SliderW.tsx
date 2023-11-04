import Image from 'next/image';

import imgPlace from '../../img/longLine.svg';
import imgtemperature from '../../img/temperature.svg';
import imgClouds from '../../img/clouds.png';
import arrowPrev from '../../img/arrow-prev.svg';
import arrowNext from '../../img/arrow_next.svg';
import styles from './SliderW.module.scss';

export default function Slider() {
  return (
    <div className={styles.container_slider}>
      <button className={styles.arrow_prev} type="button">
        <Image src={...arrowPrev} alt="not-found" />
      </button>
      <div className={styles.slider}>
        <div>
          <h1 className={styles.slider_text}>
            Burdwan
            <Image src={...imgPlace} alt="not-found" />
          </h1>
        </div>
        <div className={styles.slider_second}>
          <div className={styles.slider_second_block}>
            <Image src={...imgtemperature} alt="not-found" />
            <span className={styles.slider_second_text}>27°C</span>
            <div className={styles.imgblock}>
              <Image src={imgClouds} alt="not-found" />
            </div>
          </div>
        </div>
        <div className={styles.slider_third}>
          <time className={styles.slider_date} dateTime="2023-10-17">Aug 23,  Tue</time>
        </div>
        <div className={styles.slider_block_list}>
          <ul className={styles.slider_list}>
            <li className={styles.slider_list_item}>
              <p>Humidity</p>
            </li>
            <li className={styles.slider_list_item}>
              <b>99%</b>
            </li>
          </ul>
          <ul className={styles.slider_list}>
            <li className={styles.slider_list_item}>
              <p>Visiblity</p>
            </li>
            <li className={styles.slider_list_item}>
              <b>8km</b>
            </li>
          </ul>
          <ul className={styles.slider_list}>
            <li className={styles.slider_list_item}>
              <p>Air Pressure</p>
            </li>
            <li className={styles.slider_list_item}>
              <b>1005hPa</b>
            </li>
          </ul>
          <ul className={styles.slider_list}>
            <li className={styles.slider_list_item}>
              <p>Wind</p>
            </li>
            <li className={styles.slider_list_item}>
              <b>2mph</b>
            </li>
          </ul>
        </div>
      </div>
      <button className={styles.arrow_next} type="button">
        <Image src={...arrowNext} alt="not-found" />
      </button>
    </div>
  );
}
