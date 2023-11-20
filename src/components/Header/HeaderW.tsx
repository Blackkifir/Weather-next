import Image from 'next/image';
import logo from '../../img/weather-logo.svg';
import styles from './HeaderW.module.scss';

export default function Header() {
  return (
    <header>
      <Image className={styles.logo} src={...logo} width={100} height={100} alt="not-found" />
      <nav className={styles.navigation}>
        <div className={styles.flexBox}>
          <div className={styles.leftBlock}>
            <h1 className="header-title">WeatherMe</h1>
            <p>21:00 pm</p>
          </div>
          <ul className="header-list">
            <li className="item-list">Today</li>
            <li className="item-list">Tommorow</li>
            <li className="item-list">Monthly Forecast</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
