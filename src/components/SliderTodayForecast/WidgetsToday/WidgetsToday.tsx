import Image from 'next/image';
import moment from 'moment';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';
import { IPropsWidgets } from './interfaces/IPropsWidgets';
import styles from './WidgetsToday.module.scss';

export default function WidgetsToday({
  time,
  temp_c,
  text,
  icon,
}: IPropsWidgets) {
  const { knockValue } = useAppSelector((state: RootState) => state.weekForecastSlice);
  const conversationFahrenheit = (celsius: number) => (Math.round(celsius) * 9) / 5 + 32;

  if (!icon) {
    return null;
  }

  const timeStr = moment(time).format('HH:mm');
  return (
    <div className={styles.flexBox}>
      <div className={styles.flexBox_block_1}>
        <span className={styles.flexBox_text_1}>{timeStr}</span>
        <Image
          src={`https:${icon}`}
          width={70}
          height={70}
          alt="widgetImg"
          className={styles.image_clouds}
        />
      </div>
      <div className={styles.flexBox_block_2}>
        <span className={styles.flexBox_text_2}>
          {knockValue ? conversationFahrenheit(temp_c) : temp_c}
          °
        </span>
        <p className={styles.flexBox_desc}>{text}</p>
      </div>
    </div>
  );
}
