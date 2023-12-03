/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slice/weatherSlice';
import weekForecastSlice from './slice/weekForecastSlice';

const store = configureStore({
  reducer: {
    weatherSlice,
    weekForecastSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
