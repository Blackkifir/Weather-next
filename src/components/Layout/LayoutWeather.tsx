import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { fetchForecastData, setLoading } from '@/redux/slice/weatherSlice';
import { fetchWeekData } from '@/redux/slice/weekForecastSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppSelector } from '../../redux/hooks/hooksW';

import Search from '../Search/SearchWeather';
import Knock from '../Knock/KnockWeather';
import Loader from '../Loader/LoaderWeather';

import styles from './LayoutWeather.module.scss';
import SliderSlick from '../SliderSlick/SliderSlick';

export default function Main() {
  const [inputValue, setInputValue] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const {
    isloading,
  } = useAppSelector((state: RootState) => state.weatherSlice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeInput = useCallback(
    debounce((str: string) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchForecastData(str));
      dispatch(setLoading(false));
    }, 3000),
    [dispatch],
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(fetchWeekData(inputValue));
  }, [dispatch, inputValue]);

  useEffect(() => {
    debounceChangeInput(inputValue);
  }, [debounceChangeInput, inputValue]);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={styles.main_container}>
      <Head>
        <title>Weather</title>
      </Head>
      <Knock />
      <Search inputValue={inputValue} onChangeSearch={onChangeSearch} />
      {isloading ? <Loader /> : <SliderSlick />}
    </div>
  );
}
