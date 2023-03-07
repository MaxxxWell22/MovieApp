import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
    name: 'films',
    initialState: {
        films: null
    },
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload
        },
    },
});

export const { setFilms } = filmSlice.actions;
export default filmSlice.reducer;