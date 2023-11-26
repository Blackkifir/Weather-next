import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks/hooksW';
import Widgets from '../Widgets/WidgetsW';

import styles from './FooterW.module.scss';

export default function Footer() {
  const { widgetsData } = useAppSelector((state: RootState) => state.widgetsSlice);
  const { loading } = useAppSelector((state: RootState) => state.weatherSlice);
  return (
    <footer>
      <div className={!loading ? styles.footer_container : styles.hiddenFooter}>
        {!loading
        && widgetsData.forecast.forecastday[0].hour.map((obj) => (
          <Widgets
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
