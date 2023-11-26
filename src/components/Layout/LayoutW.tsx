import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { fetchWidgetsData } from '@/redux/slice/widgetsSlice';
import { fetchDataSlider, setInputValue } from '@/redux/slice/weatherSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppSelector } from '../../redux/hooks/hooksW';

import Search from '../Search/SearchW';
import SliderW from '../SliderSlick/SliderSlick';
import Knock from '../Knock/KnockW';
import Loader from '../Loader/LoaderW';

import styles from './LayoutW.module.scss';

export default function Main() {
  const dispatch: AppDispatch = useDispatch();
  const {
    items,
    loading,
    inputValue,
    customError,
    activeIndex,
  } = useAppSelector((state: RootState) => state.weatherSlice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeInput = useCallback(
    debounce((str: string) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchDataSlider({
        items,
        loading,
        customError,
        inputValue: str,
        activeIndex,
      }));
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchWidgetsData(
        {
          items,
          loading,
          customError,
          inputValue: str,
          activeIndex,
        },
      ));
    }, 3000),
    [dispatch],
  );
  useEffect(() => {
    debounceChangeInput(inputValue);
  }, [debounceChangeInput, inputValue]);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Weather</title>
      </Head>
      <Knock />
      <Search onChangeSearch={onChangeSearch} />
      {loading ? <Loader />
        : (
          <SliderW />
        )}
    </div>
  );
}
