import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addColor, deleteColor, getColors } from "../../services/colorService";
import { Color } from "../../types/color";

interface ColorsState {
   colors: Color[];
   loading: boolean;
   error: string | null;
}

const initialState: ColorsState = {
   colors: [],
   loading: false,
   error: null,
};

// Fetch colors
export const fetchColors = createAsyncThunk<Color[]>("colors/fetchColors", async () => {
   return await getColors();
});

// Create color
export const createColor = createAsyncThunk<Color, { name: string; hex: string }>(
   "colors/createColor",
   async (colorData) => {
      return await addColor(colorData);
   },
);

//Remove color
export const removeColor = createAsyncThunk<string, string>("colors/deleteColor", async (colorId) => {
   await deleteColor(colorId);
   return colorId;
});

export const colorsSlice = createSlice({
   name: "colors",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // Fetch colors
         .addCase(fetchColors.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchColors.fulfilled, (state, action) => {
            state.loading = false;
            state.colors = action.payload;
         })
         .addCase(fetchColors.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || "Failed to fetch colors";
         })
         // Create color
         .addCase(createColor.fulfilled, (state, action) => {
            state.colors.push(action.payload);
         })
         // Remove color
         .addCase(removeColor.fulfilled, (state, action) => {
            state.colors = state.colors.filter((color) => color.id !== action.payload);
         });
   },
});
