import { configureStore } from "@reduxjs/toolkit";
import weather from "./weatherSlice/weatherSlice";
import mode from "./modeSlice/modeSlice";
import city from "./citySlice/citySlice";

const store = configureStore({
    reducer: {
        weather,
        mode,
        city
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;