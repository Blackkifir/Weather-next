import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks/hooksW';
import Widgets from '../Widgets/WidgetsWeather';

import styles from './FooterWeather.module.scss';

export default function Footer() {
  const { items, loading } = useAppSelector((state: RootState) => state.weatherSlice);
  return (
    <footer>
      <div className={!loading ? styles.footer_container : styles.hiddenFooter}>
        {!loading
        && items.forecast.forecastday[0].hour.map((obj) => (
          <Widgets
            key={obj.time}
            time={obj.time}
            temp_c={obj.temp_c}
            text={obj.condition.text}
            icon={obj.condition.icon}
          />
        ))}
      </div>
    </footer>
  );
}
