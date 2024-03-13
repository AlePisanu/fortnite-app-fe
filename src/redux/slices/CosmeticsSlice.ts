import { createSlice } from "@reduxjs/toolkit";
import { Cosmetic } from "../../utils/interfaces/Cosmetic.interface";
import { mapCosmetics, mapCosmeticsCategories } from "../../utils/Mapper";
import { CosmeticsType } from "../../api/interfaces/Cosmetics";

interface CosmeticInitialState {
  cosmetics: Cosmetic[];
  latestCosmetics: Cosmetic[];
  cosmeticsCategory: CosmeticsType[];
  favoritesCosmetics: string[];
}

const initialState: CosmeticInitialState = {
  cosmetics: [],
  latestCosmetics: [],
  cosmeticsCategory: [],
  favoritesCosmetics: [],
};

export const cosmeticsConfigSlice = createSlice({
  name: "cosmeticsConfig",
  initialState,
  reducers: {
    setCosmeticsCategories: (state, action) => {
      state.cosmeticsCategory = mapCosmeticsCategories(action.payload);
    },
    setCosmetics: (state, action) => {
      state.cosmetics = mapCosmetics(action.payload);
    },
    setLatestCosmetics: (state, action) => {
      state.latestCosmetics = mapCosmetics(action.payload);
    },
    setFavoritesCosmetics: (state, action) => {
      localStorage.setItem("favoritesCosmetics", JSON.stringify(action.payload));
      state.favoritesCosmetics = action.payload;
    },
    reset: () => initialState,
  },
});

// ACTION
export const {
  setCosmeticsCategories,
  setCosmetics,
  setLatestCosmetics,
  reset,
  setFavoritesCosmetics,
} = cosmeticsConfigSlice.actions;

// REDUCER
export default cosmeticsConfigSlice.reducer;
