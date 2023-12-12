import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';

import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import { fetchForecastData } from '@/redux/slice/weatherSlice';
import { fetchWeekData, setIsMovedTemp, setKnockValue } from '@/redux/slice/weekForecastSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppSelector } from '../../redux/hooks/hooksW';

import Search from '../Search/SearchWeather';
import Knock from '../Knock/KnockWeather';
import Loader from '../Loader/LoaderWeather';

import styles from './LayoutWeather.module.scss';
import SliderSlick from '../SliderSlick/SliderSlick';

export default function Main() {
  const dispatch: AppDispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const {
    isloading,
  } = useAppSelector((state: RootState) => state.weatherSlice);
  const { knockValue } = useAppSelector((state: RootState) => state.weekForecastSlice);

  const onIsClickTemp = () => {
    if (knockValue) {
      dispatch(setIsMovedTemp(knockValue));
    } else {
      dispatch(setIsMovedTemp(knockValue));
    }
    dispatch(setKnockValue(!knockValue));
  };

  const onClickClose = () => {
    setInputValue('');
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeInput = useCallback(
    debounce((str: string) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchForecastData(str));
    }, 3000),
    [],
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeSecond = useCallback(
    debounce((str: string) => {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(fetchWeekData(str));
    }, 3000),
    [dispatch],
  );

  useEffect(() => {
    debounceChangeInput(inputValue);
    debounceChangeSecond(inputValue);
  }, [debounceChangeSecond, debounceChangeInput, inputValue]);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const manyStr = 'gigigigigigigigigigi';
    if (inputValue.length >= manyStr.length) {
      setInputValue('');
    } else {
      setInputValue(event.target.value);
    }
  };

  return (
    <div className={styles.main_container}>
      <Head>
        <title>Weather</title>
      </Head>
      <Knock onIsClickTemp={onIsClickTemp} />
      <Search
        inputValue={inputValue}
        onClickClose={onClickClose}
        onChangeSearch={onChangeSearch}
      />
      {isloading ? <Loader /> : <SliderSlick />}
    </div>
  );
}
