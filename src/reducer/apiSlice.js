import { createSlice } from "@reduxjs/toolkit";

const baseURL = "https://rickandmortyapi.com/api/character";

const initialState = {
  characters: [],
  status: "idle",
  error: null,
};

// Crea un slice de Redux
export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    getCharacters: (state) => {
      state.status = "loading";
    },
    getCharactersSuccess: (state, action) => {
      state.status = "succeeded";
      state.characters = action.payload;
    },
    getCharactersFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

// Exporta los action creators 
export const { getCharacters, getCharactersSuccess, getCharactersFailure } =
  apiSlice.actions;

// Exporta el reducer
export default apiSlice.reducer;
