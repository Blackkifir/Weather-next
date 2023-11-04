import styles from './KnockW.module.scss';

export default function Knock() {
  return (
    <div className={styles.knock}>
      <span className={styles.knock_degrees}>°C</span>
      <div className={styles.knock_switch}>
        <button type="button" className={styles.knock_circle}>.</button>
      </div>
      <span className={styles.knock_degrees}>°F</span>
    </div>
  );
}
