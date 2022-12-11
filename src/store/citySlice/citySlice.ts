import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICity } from "../../types";

const initialState: ICity = {
    id: 0,
    cityName: "Весь Узбекистан",
    slug: "uzbekistan"
}

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        handleCity: (state, action: PayloadAction<ICity>) => {
            state.id = action.payload.id;
            state.cityName = action.payload.cityName;
            state.slug = action.payload.slug;
        }
    }
})

export default citySlice.reducer;
export const { handleCity } = citySlice.actions;