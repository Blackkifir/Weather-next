import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPropsForecastAll } from '@/redux/interfaces/IPropsForecasts';
import { IPropsWidgetsArray, Status } from '../interfaces/IPropsWidgetsArray';
import { IPropsItemData } from '../interfaces/IPropsItemData';

const initialState: IPropsWidgetsArray = {
  widgetsData: {
    forecast: {
      forecastday: [
        {
          date: '',
          day: {
            avghumidity: 0,
            avgtemp_c: 0,
            avgvis_km: 0,
            avgvis_miles: 0,
            condition: {
              icon: '',
              text: '',
            },
            maxtemp_c: 0,
            maxwind_kph: 0,
            maxwind_mph: 0,
            mintemp_c: 0,
            totalprecip_in: 0,
            totalprecip_mm: 0,
            uv: 0,
          },
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
  },
  status: Status.LOADING,
};

export const fetchWidgetsData = createAsyncThunk(
  'widgets/fetchWidgetsData',
  async (params: IPropsItemData, { rejectWithValue }) => {
    const { inputValue } = params;
    try {
      const response = await
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=e43e4a8a8fd6440dbd3210041231311&q=${inputValue || 'Kyiv'}`,
      );
      if (!response.ok) {
        throw new Error('request widgets failed');
      }

      const data = await response.json() as IPropsForecastAll;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    setWidgetsData(state, action: PayloadAction<IPropsForecastAll>) {
      state.widgetsData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWidgetsData.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchWidgetsData.fulfilled, (state, action) => {
        state.widgetsData = action.payload;
      })
      .addCase(fetchWidgetsData.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const { setWidgetsData } = widgetsSlice.actions;
export default widgetsSlice.reducer;
