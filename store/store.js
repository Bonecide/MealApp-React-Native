import { configureStore } from "@reduxjs/toolkit";
import FavoriteMealsSlice from "./slices/FavoriteMealsSlice";


export const store = configureStore({
    reducer: {
        favorites : FavoriteMealsSlice
    }
});