import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPropsItemArray } from '../interfaces/IPropsItemArray';
import { IPropsProperties } from '../interfaces/IPropsProperties';

const initialState: IPropsItemArray = {
  items: [],
  loading: true,
  error: null,
};

export const fetchDataSlider = createAsyncThunk(
  'weather/fetchDataSlider',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://653032606c756603295e634b.mockapi.io/weatherItems');
      if (!response.ok) {
        throw new Error('The request failed');
      }
      const data = await response.json() as IPropsProperties[]; // Получение данных из ответа
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
    setItems(state, action: PayloadAction<IPropsProperties[]>) {
      state.items = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataSlider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataSlider.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchDataSlider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as Error;
      });
  },
});

export const { setLoading, setItems, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
