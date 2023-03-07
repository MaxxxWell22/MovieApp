import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
    name: 'favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
        setItemsFavorites: (state, action) => {
            state.favorites.push(action.payload)
        },
        deleteItemsFavorites: (state, action) => {
            state.favorites = state.favorites.filter(favorite => favorite.filmId !== action.payload)
        },
    },
});

export const { setItemsFavorites, deleteItemsFavorites } = filmSlice.actions;
export default filmSlice.reducer;