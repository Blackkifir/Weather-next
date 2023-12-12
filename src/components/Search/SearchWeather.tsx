import Image from 'next/image';

import { IPropsChangeInput } from '@/redux/interfaces/IPropsFunc';

import searchImg from '../../icons/search-location.svg';

import styles from './SearchWeather.module.scss';

export default function Search({
  onChangeSearch,
  inputValue,
  onClickClose,
  handleKeyPress,
}: IPropsChangeInput) {
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
          onKeyDown={handleKeyPress}
          onChange={onChangeSearch}
          type="search"
          placeholder="Search location..."
        />
        <button
          type="button"
          onClick={onClickClose}
          className={inputValue ? styles.closeTarget : styles.noneCloseTarget}
        >
          &#10006;
        </button>
      </form>
    </div>
  );
}
