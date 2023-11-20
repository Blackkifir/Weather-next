import Image from 'next/image';
import img from '../../img/rain-clouds.svg';
import styles from './WidgetsW.module.scss';

export default function Widgets() {
  return (
    <div className={styles.flexBox}>
      <div className={styles.flexBox_block_1}>
        <span className={styles.flexBox_text_1}>22:00</span>
        <Image src={...img} alt="not-found" className={styles.image_clouds} />
      </div>
      <div className={styles.flexBox_block_2}>
        <span className={styles.flexBox_text_2}>30</span>
      </div>
    </div>
  );
}
