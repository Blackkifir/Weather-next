import Image from 'next/image';
import styles from './FooterW.module.scss';
import img from '../../img/rain-clouds.svg';

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.flexBox}>
          <div className={styles.flexBox_block_1}>
            <span className={styles.flexBox_text_1}>23:00 pm</span>
            <Image src={...img} alt="not-found" className={styles.image_clouds} />
          </div>
          <div className={styles.flexBox_block_2}>
            <span className={styles.flexBox_text_2}>29°</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
