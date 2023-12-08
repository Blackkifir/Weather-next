import { IPropsOnIsClickTemp } from '@/redux/interfaces/IPropsFunc';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';
import styles from './KnockWeather.module.scss';

export default function Knock({ onIsClickTemp }: IPropsOnIsClickTemp) {
  const { isMovedTemp } = useAppSelector((state: RootState) => state.weekForecastSlice);
  return (
    <div className={styles.knock}>
      <span className={styles.knock_degrees}>°C</span>
      <div className={isMovedTemp ? styles.knock_switch : styles.knock_switchBackground}>
        <button
          onClick={onIsClickTemp}
          type="button"
          className={isMovedTemp ? styles.knock_circleIsMoved : styles.knock_circleUnMoved}
          aria-label="."
        />
      </div>
      <span className={styles.knock_degrees}>°F</span>
    </div>
  );
}
