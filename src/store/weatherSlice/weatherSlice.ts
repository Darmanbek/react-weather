import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ICity, IWeatherData } from "../../types";

// const weatherOneDayAPI = "a17137ae824eb4d713d083ab45d608a9";
// const urlOneDay = `https://api.openweathermap.org/data/2.5/weather?q=Uzbekistan,uz&lang=ru&dt=${date}&appid=${weatherOneDayAPI}`

export const getWeather = createAsyncThunk<IWeatherData, ICity>("weather/getWeather", async (data: ICity, { rejectWithValue }) => {
    const weatherAPI = "96da7d600986747e6c564e9445372e3c";
    const date = Date.now();
    const { slug } = data;
    const cityCode = "uz";
    const lang = "ru"
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${slug},${cityCode}&lang=${lang}&dt=${date}&appid=${weatherAPI}`
    
    try {
        const responce = await axios.get(url);
        if(responce.status === 200){
            return responce.data;
        }
    } catch (error) {
        return rejectWithValue(error);
    }
})

interface IInitialState {
    weather: IWeatherData | null,
    loading: string,
    error: any | null
}

const initialState: IInitialState = {
    weather: null,
    loading: "",
    error: null
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWeather.pending, (state) => {
            state.weather = null;
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(getWeather.fulfilled, (state, { payload }) => {
            state.weather = payload;
            state.loading = "fulfilled";
            state.error = null;
        });
        builder.addCase(getWeather.rejected, (state, { payload }) => {
            state.loading = "rejected";
            state.error = payload;
        });
    }
});

export default weatherSlice.reducer;
export const {} = weatherSlice.actions;