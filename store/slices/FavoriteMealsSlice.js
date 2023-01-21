
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    FavoriteMeals :  []
}
const favoriteSlice = createSlice({
name : 'favorites',
initialState,
reducers : {
    addFavorite : (state,action) => {
        state.FavoriteMeals.push(action.payload);
    },
    deleteFavorite : (state,action) => {
        state.FavoriteMeals.splice(state.FavoriteMeals.indexOf(action.payload) , 1);
    }
}
})
export const { addFavorite, deleteFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer