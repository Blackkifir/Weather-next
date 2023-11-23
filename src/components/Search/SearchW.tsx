import Image from 'next/image';

import { IPropsChangeInput } from '@/redux/interfaces/IPropsFunc';
import { useAppSelector } from '@/redux/hooks/hooksW';
import { RootState } from '@/redux/store';

import searchImg from '../../icons/search-location.svg';

import styles from './SearchW.module.scss';

export default function Search({ onChangeSearch }: IPropsChangeInput) {
  const { inputValue } = useAppSelector((state: RootState) => state.weatherSlice);
  return (
    <div className={styles.search_flexBox}>
      <form>
        <Image
          className={styles.search_img}
          src={...searchImg}
          alt="not-found"
        />
        <input value={inputValue} onChange={onChangeSearch} type="search" placeholder="Search location..." />
      </form>
    </div>
  );
}
