/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slice/weatherSlice';

const store = configureStore({
  reducer: {
    weatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
