import React, { useEffect } from 'react';
import Head from 'next/head';

import { useDispatch } from 'react-redux';
import { fetchDataSlider } from '@/redux/slice/weatherSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { useAppSelector } from '../../redux/hooks/hooksW';

import Search from '../Search/SearchW';
import Slider from '../Slider/SliderW';
import Knock from '../Knock/KnockW';
import Loader from '../Loader/LoaderW';

import styles from './LayoutW.module.scss';

export default function Main() {
  const dispatch: AppDispatch = useDispatch();
  const { items, loading } = useAppSelector((state: RootState) => state.weatherSlice);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(fetchDataSlider());
  }, [dispatch]);

  console.log(items, loading);
  return (
    <div className={styles.main_container}>
      <Head>
        <title>Weather</title>
      </Head>
      <Knock />
      <Search />
      {loading ? <Loader /> : <Slider />}
    </div>
  );
}
