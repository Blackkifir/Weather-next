import { RootState } from '@/redux/store';
import { useAppSelector } from '@/redux/hooks/hooksW';
import WidgetsToday from '../SliderTodayForecast/WidgetsToday/WidgetsToday';
import WidgetsTommorow from '../SliderTommorowForecast/WidgetsTommorow/WidgetsTommorow';

import styles from './FooterWeather.module.scss';

export default function Footer() {
  const { items, isloading, activeIndex } = useAppSelector((state: RootState) => state.weatherSlice);
  const { weekItems } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const itemsIcon = items.forecast.forecastday[0].hour[0].condition;

  let content;
  if (!isloading) {
    if (activeIndex === 1) {
      content = items.forecast.forecastday[0].hour.map((obj) => (
        <WidgetsToday
          key={obj.time}
          time={obj.time}
          temp_c={obj.temp_c}
          text={obj.condition.text}
          icon={obj.condition.icon}
        />
      ));
    } else if (activeIndex === 2) {
      content = weekItems.days[0 + 1].hours.map((obj) => (
        <WidgetsTommorow
          icon={itemsIcon.icon}
          key={obj.datetime}
          datetime={obj.datetime}
          temp={obj.temp}
          conditions={obj.conditions}
        />
      ));
    } else if (activeIndex === 3) {
      content = styles.widjetsHidden;
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={!isloading && activeIndex === 3 ? styles.widjetsHidden : ''}>
        <div className={!isloading ? styles.footer_container : styles.hiddenFooter}>
          {content}
        </div>
      </div>
    </footer>
  );
}
