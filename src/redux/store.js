import { configureStore } from "@reduxjs/toolkit";
import movies from './movies/reducer.js';

const store = configureStore({
  reducer: {
    movies,
  },
});

export default store;