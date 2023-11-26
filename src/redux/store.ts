/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './slice/weatherSlice';
import widgetsSlice from './slice/widgetsSlice';

const store = configureStore({
  reducer: {
    weatherSlice,
    widgetsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
