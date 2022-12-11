import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    mode: boolean;
}

const initialState: IInitialState = {
    mode: localStorage.getItem("mode") ? localStorage.getItem("mode") === "true" ? true : false : true,
}

const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        handleMode: (state) => {
            state.mode = !state.mode;
        },
        setMode: (state, action: PayloadAction<boolean>) => {
            state.mode = action.payload;
        }
    }
});

export default modeSlice.reducer;
export const { handleMode, setMode } = modeSlice.actions;