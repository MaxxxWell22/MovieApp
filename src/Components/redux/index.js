import { configureStore } from "@reduxjs/toolkit";
import filmReducer from './films/films';
import favoritesReducer from './favorites/favorites';
import similarsReducer from './similar/similar';

export const store = configureStore({
    reducer: {
        films: filmReducer,
        favorites: favoritesReducer,
        similars: similarsReducer,
    },
});