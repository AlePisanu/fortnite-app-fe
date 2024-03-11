import { createSlice } from "@reduxjs/toolkit";
import { Cosmetic } from "../../utils/interfaces/Cosmetic.interface";
import { mapCosmetics, mapCosmeticsCategories } from "../../utils/Mapper";
import { CosmeticsType } from "../../api/interfaces/Cosmetics";

interface CosmeticInitialState {
  cosmetics: Cosmetic[];
  cosmeticsCategory: CosmeticsType[],
}

const initialState: CosmeticInitialState = {
  cosmetics: [],
  cosmeticsCategory: []
};

export const cosmeticsConfigSlice = createSlice({
  name: "cosmeticsConfig",
  initialState,
  reducers: {
    setCosmeticsCategories: (state, action) => {
      state.cosmeticsCategory = mapCosmeticsCategories(action.payload)
    },
    setCosmetics: (state, action) => {
      state.cosmetics = mapCosmetics(action.payload)
    },
    reset: () => initialState
  }
});

// ACTION
export const {
  setCosmeticsCategories,
  setCosmetics,
  reset
} = cosmeticsConfigSlice.actions;

// REDUCER
export default cosmeticsConfigSlice.reducer;
