import styles from './KnockWeather.module.scss';

export default function Knock() {
  return (
    <div className={styles.knock}>
      <span className={styles.knock_degrees}>°C</span>
      <div className={styles.knock_switch}>
        <button type="button" className={styles.knock_circle} aria-label="." />
      </div>
      <span className={styles.knock_degrees}>°F</span>
    </div>
  );
}
