import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPropsItemData } from '../interfaces/IPropsItemData';
import { IPropsForecastAll } from '../interfaces/IPropsForecasts';

const initialState: IPropsItemData = {
  items: {
    current: {
      last_updated: '',
      temp_c: 0,
      humidity: 0,
      pressure_mb: 0,
      wind_mph: 0,
      wind_kph: 0,
      vis_km: 0,
      vis_miles: 0,
      condition: {
        icon: '',
        text: '',
      },
      precip_mm: 0,
      feelslike_c: 0,
      uv: 0,
      gust_mph: 0,
    },
    forecast: {
      forecastday: [
        {
          date: '',
          hour: [
            {
              time: '',
              temp_c: 0,
              condition: {
                text: '',
                icon: '',
              },
              pressure_mb: 0,
              pressure_in: 0,
            },
          ],
        },
      ],
    },
    location: {
      name: '',
      region: '',
      localtime: '',
      country: '',
      tz_id: '',
    },
  },
  isloading: true,
  activeIndex: 1,
  error: null,
};

export const fetchForecastData = createAsyncThunk(
  'widgets/fetchWidgetsData',
  async (inputValue: string, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line max-len
      const todayApi = `https://api.weatherapi.com/v1/forecast.json?key=e43e4a8a8fd6440dbd3210041231311&q=${inputValue || 'Kyiv'}`;
      const response = await fetch(todayApi);

      if (!response.ok) {
        throw new Error('request weatherSliceResponse failed');
      }

      const data = await response.json() as IPropsForecastAll;
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('request weatherSlice failed');
    }
  },
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isloading = action.payload;
    },
    setItems(state, action: PayloadAction<IPropsForecastAll>) {
      state.items = action.payload;
      state.error = null;
    },
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecastData.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchForecastData.fulfilled, (state, action) => {
        state.isloading = false;
        if (!(action.payload instanceof Error)) {
          state.items = action.payload;
          state.error = null;
        }
      })
      .addCase(fetchForecastData.rejected, (state, action) => {
        state.isloading = true;
        state.error = action.payload as Error;
      });
  },
});

export const {
  setLoading,
  setItems,
  setActiveIndex,
  setError,
} = weatherSlice.actions;
export default weatherSlice.reducer;
