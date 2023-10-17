import Image from 'next/image';
import searchImg from '../../img/search-location.svg';
import imgPlace from '../../img/longLine.svg';
import imgtemperature from '../../img/temperature.svg';
import imgClouds from '../../img/clouds.png';
import styles from './MainWeather.module.scss';

export default function Main() {
  return (
    <div className={styles.main_container}>
      <div className={styles.knock}>
        <span className={styles.knock_degrees}>°C</span>
        <div className={styles.knock_switch}>
          <button type="button" className={styles.knock_circle}>.</button>
        </div>
        <span className={styles.knock_degrees}>°F</span>
      </div>
      <div className={styles.search_flexBox}>
        <form>
          <Image
            className={styles.search_img}
            src={...searchImg}
            alt="not-found"
          />
          <input type="search" placeholder="Search location..." />
        </form>
      </div>
      <div className={styles.container_slider}>
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
      </div>
    </div>
  );
}
