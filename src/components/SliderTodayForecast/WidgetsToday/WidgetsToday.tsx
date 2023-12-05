import Image from 'next/image';
import moment from 'moment';
import { IPropsWidgets } from './interfaces/IPropsWidgets';
import styles from './WidgetsToday.module.scss';

export default function WidgetsToday({
  time,
  temp_c,
  text,
  icon,
}: IPropsWidgets) {
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
          {temp_c}
          °C
        </span>
        <p className={styles.flexBox_desc}>{text}</p>
      </div>
    </div>
  );
}