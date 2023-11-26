import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPropsWidgetsAll } from '@/components/Widgets/interfaces/IPropsWidgets';
import { IPropsWidgetsArray, Status } from '../interfaces/IPropsWidgetsArray';
import { IPropsItemData } from '../interfaces/IPropsItemData';

const initialState: IPropsWidgetsArray = {
  widgetsData: {
    forecast: {
      forecastday: [
        {
          hour: [
            {
              time: '',
              temp_c: 0,
              condition: {
                text: '',
                icon: '',
              },
            },
          ],
        },
      ],
    },
    hour: [],
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

      const data = await response.json() as IPropsWidgetsAll;
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
    setWidgetsData(state, action: PayloadAction<IPropsWidgetsAll>) {
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
