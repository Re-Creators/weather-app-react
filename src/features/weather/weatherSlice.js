import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  loading: false,
  data: {},
  error: null,
};

export const getWeatherByWoeid = createAsyncThunk(
  "weather/fetch",
  async (woeid) => {
    try {
      const { data } = await axios.get(`location/${woeid}`);
      return data;
    } catch (err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeatherByWoeid.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeatherByWoeid.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getWeatherByWoeid.rejected, (state) => {
        state.loading = false;
        state.error = "Cannot get the weather!";
      });
  },
});

export const selectLoading = (state) => state.weather.loading;
export const selectError = (state) => state.weather.error;
export const selectWeathers = (state) =>
  state.weather.data.consolidated_weather;

export const selectWeatherToday = (state) => {
  const weather = state.weather.data.consolidated_weather;
  if (weather) {
    return {
      ...weather[0],
      city: state.weather.data.title,
    };
  }
  return null;
};

export default weatherSlice.reducer;
