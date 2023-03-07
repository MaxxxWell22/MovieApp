import { createSlice } from "@reduxjs/toolkit";

const similarSlice = createSlice({
    name: 'similars',
    initialState: {
        similars: null
    },
    reducers: {
        setSimilars: (state, action) => {
            state.similars = action.payload
        },
    },
});

export const { setSimilars } = similarSlice.actions;
export default similarSlice.reducer;