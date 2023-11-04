import Image from 'next/image';
import searchImg from '../../img/search-location.svg';
import styles from './SearchW.module.scss';

export default function Search() {
  return (
    <div className={styles.search_flexBox}>
      <form>
        <Image
          className={styles.search_img}
          src={...searchImg}
          alt="not-found"
        />
        <input type="search" placeholder="Search location..." />
      </form>
    </div>
  );
}
