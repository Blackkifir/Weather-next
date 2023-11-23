import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPropsItemData } from '../interfaces/IPropsItemData';
import { IPropsSliderMain } from '../../components/SliderMain/interfaces/IPropsSliderMain';

const initialState: IPropsItemData = {
  items: {
    location: {
      name: '',
      region: '',
      localtime: '',
      country: '',
    },
    current: {
      last_updated: '',
      temp_c: 0,
      temp_f: 0,
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
    },
  },
  loading: true,
  customError: null,
  inputValue: '',
  activeIndex: 1,
};

export const fetchDataSlider = createAsyncThunk(
  'weather/fetchDataSlider',
  async (params: IPropsItemData, { rejectWithValue }) => {
    const { inputValue } = params;
    try {
      const response = await
      fetch(`http://api.weatherapi.com/v1/current.json?key=e43e4a8a8fd6440dbd3210041231311&q=${inputValue || 'Kyiv'}`);
      if (!response.ok) {
        throw new Error('The request failed');
      }
      const data = await response.json() as IPropsSliderMain;
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setItems(state, action: PayloadAction<IPropsSliderMain>) {
      state.items = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.customError = action.payload;
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataSlider.pending, (state) => {
        state.loading = true;
        state.customError = null;
      })
      .addCase(fetchDataSlider.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchDataSlider.rejected, (state, action) => {
        state.loading = false;
        state.customError = action.payload as string;
      });
  },
});

export const {
  setLoading,
  setItems,
  setError,
  setInputValue,
  setActiveIndex,
} = weatherSlice.actions;
export default weatherSlice.reducer;
