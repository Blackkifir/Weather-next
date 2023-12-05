import Image from 'next/image';

import { IPropsChangeInput } from '@/redux/interfaces/IPropsFunc';

import searchImg from '../../icons/search-location.svg';

import styles from './SearchWeather.module.scss';

export default function Search({ onChangeSearch, inputValue }: IPropsChangeInput) {
  return (
    <div className={styles.search_flexBox}>
      <form>
        <Image
          className={styles.search_img}
          src={...searchImg}
          alt="not-found"
        />
        <input
          name="search"
          value={inputValue}
          onChange={onChangeSearch}
          type="search"
          placeholder="Search location..."
        />
      </form>
    </div>
  );
}
