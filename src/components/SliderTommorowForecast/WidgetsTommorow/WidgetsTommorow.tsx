import Image from 'next/image';
import moment from 'moment';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';
import { IPropsWidgetsTommorow } from './interfaces/IPropsWidgetsTommorow';
import styles from './WidgetsTommorow.module.scss';

export default function WidgetsTommorow({
  datetime,
  icon,
  temp,
  conditions,
}: IPropsWidgetsTommorow) {
  const { knockValue } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const conversationFahrenheit = (celsius: number) => (Math.round(celsius) * 9) / 5 + 32;

  if (!icon) {
    return null;
  }

  const timeStr = moment(datetime, 'HH:mm:ss').format('HH:mm');
  return (
    <div className={styles.flexBox}>
      <div className={styles.flexBox_block_1}>
        <span className={styles.flexBox_text_1}>{timeStr}</span>
        <Image
          src={`http:${icon}`}
          width={70}
          height={70}
          alt="widgetImg"
          className={styles.image_clouds}
        />
      </div>
      <div className={styles.flexBox_block_2}>
        <span className={styles.flexBox_text_2}>
          {knockValue ? conversationFahrenheit(parseFloat(temp)) : temp}
          °
        </span>
        <p className={styles.flexBox_desc}>{conditions}</p>
      </div>
    </div>
  );
}
