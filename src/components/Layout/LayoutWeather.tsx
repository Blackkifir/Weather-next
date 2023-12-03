import React, { useCallback, useEffect } from 'react';
import Head from 'next/head';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { fetchForecastData, setInputValue, setLoading } from '@/redux/slice/weatherSlice';
import { fetchWeekData } from '@/redux/slice/weekForecastSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppSelector } from '../../redux/hooks/hooksW';

import Search from '../Search/SearchWeather';
import Knock from '../Knock/KnockWeather';
import Loader from '../Loader/LoaderWeather';

import styles from './LayoutWeather.module.scss';
import SliderSlick from '../SliderSlick/SliderSlick';

export default function Main() {
  const dispatch: AppDispatch = useDispatch();
  const {
    items,
    loading,
    inputValue,
    activeIndex,
  } = useAppSelector((state: RootState) => state.weatherSlice);
  const { weekItems } = useAppSelector((state: RootState) => state.weekForecastSlice);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeInput = useCallback(
    debounce((str: string) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchForecastData({
        items,
        loading,
        inputValue: str,
        activeIndex,
      }));
      dispatch(setLoading(false));
    }, 3000),
    [dispatch],
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(fetchWeekData({
      inputValue,
      items,
    }));
  }, [dispatch]);

  useEffect(() => {
    debounceChangeInput(inputValue);
  }, [debounceChangeInput, inputValue]);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputValue(event.target.value));
  };

  console.log(weekItems);
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Weather</title>
      </Head>
      <Knock />
      <Search onChangeSearch={onChangeSearch} />
      {loading ? <Loader /> : <SliderSlick />}
    </div>
  );
}
