import moment from 'moment';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPropsWeekData } from '../interfaces/IPropsWeekData';
import { IPropsWeekAll } from '../interfaces/IPropsWeekAll';

const initialState: IPropsWeekData = {
  weekItems: {
    address: '',
    timezone: '',
    days: [
      {
        datetime: '',
        feelslike: '',
        hours: [
          {
            conditions: '',
            datetime: '',
            temp: '',
          },
        ],
        humidity: 0,
        icon: '',
        precipcover: '',
        pressure: '',
        temp: 0,
        uvindex: 0,
        visibility: 0,
        windspeed: 0,
      },
    ],
    icon: '',
  },
  error: null,
  isMovedTemp: false,
  knockValue: false,
};

export const fetchWeekData = createAsyncThunk(
  'weekForecast/fetchWeekData',
  async (inputValue: string, { rejectWithValue }) => {
    const currentDate = moment().format('YYYY-MM-DD');
    const endDate = moment().add(7, 'days').format('YYYY-MM-DD');
    try {
      // eslint-disable-next-line max-len
      const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue || 'Kyiv'}/${currentDate}/${endDate}?key=V2AN8FGDWJUTFNZ2A8CT6FW8B&unitGroup=metric`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('request weekForecastResponse failed');
      }

      const data = await response.json() as IPropsWeekAll;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('request weekForecast failed');
    }
  },
);
const weekForecastSlice = createSlice({
  name: 'weekForecast',
  initialState,
  reducers: {
    setWeekItems(state, action: PayloadAction<IPropsWeekAll>) {
      state.weekItems = action.payload;
      state.error = null;
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
    setIsMovedTemp(state, action: PayloadAction<boolean>) {
      state.isMovedTemp = action.payload;
    },
    setKnockValue(state, action: PayloadAction<boolean>) {
      state.knockValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeekData.fulfilled, (state, action) => {
        state.weekItems = action.payload;
        state.error = null;
      })
      .addCase(fetchWeekData.rejected, (state, action) => {
        state.error = action.payload as Error;
      });
  },
});

export const {
  setWeekItems,
  setError,
  setIsMovedTemp,
  setKnockValue,
} = weekForecastSlice.actions;
export default weekForecastSlice.reducer;
