import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPropsItemData } from '../interfaces/IPropsItemData';
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
            datetime: '',
            icon: '',
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
  },
  error: null,
};

export const fetchWeekData = createAsyncThunk(
  'weekForecast/fetchWeekData',
  async (params: IPropsItemData, { rejectWithValue }) => {
    const currentDate = new Date();
    const currentDateStr = currentDate.toISOString().split('T')[0];

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    const endDateStr = endDate.toISOString().split('T')[0];

    const { inputValue } = params;
    try {
      // eslint-disable-next-line max-len
      const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue || 'Kyiv'}/${currentDateStr}/${endDateStr}?key=V2AN8FGDWJUTFNZ2A8CT6FW8B`;
      const response = await fetch(apiUrl);
      console.log(apiUrl);

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

export const { setWeekItems, setError } = weekForecastSlice.actions;
export default weekForecastSlice.reducer;
