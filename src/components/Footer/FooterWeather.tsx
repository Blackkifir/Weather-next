import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks/hooksW';
import Widgets from '../Widgets/WidgetsWeather';

import styles from './FooterWeather.module.scss';

export default function Footer() {
  const { items, isloading } = useAppSelector((state: RootState) => state.weatherSlice);
  return (
    <footer>
      <div className={!isloading ? styles.footer_container : styles.hiddenFooter}>
        {!isloading
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
