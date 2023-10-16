import Image from 'next/image';
import styles from './MainWeather.module.scss';
import searchImg from '../../img/search-location.svg';

export default function Main() {
  return (
    <div className={styles.main_container}>
      <div className={styles.knock}>
        <span className={styles.degrees}>°C</span>
        <div className={styles.switch}>
          <button type="button" className={styles.circle}>.</button>
        </div>
        <span className={styles.degrees}>°F</span>
      </div>
      <div className={styles.search_flex}>
        <form>
          <Image
            className={styles.search_img}
            src={...searchImg}
            alt="not-found"
          />
          <input type="search" placeholder="Search location..." />
        </form>
      </div>
    </div>
  );
}
