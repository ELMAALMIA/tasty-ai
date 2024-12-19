// File: src/redux/recipeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const generateRecipe = createAsyncThunk(
  'recipe/generate',
  async (formData) => {
    const response = await fetch('https://tasty-ai-9affc94ff0d5.herokuapp.com/api/recipes/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Failed to generate recipe');
    }

    const data = await response.json();
    if (data.status !== 'success') {
      throw new Error(data.message || 'Failed to generate recipe');
    }
    console.log("data ",data)
    return data;
  }
);

const recipeSlice = createSlice({
  name: 'recipe',
  initialState: {
    recipe: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(generateRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipe = action.payload;
        state.error = null;
      })
      .addCase(generateRecipe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.recipe = null;
      });
  }
});

export default recipeSlice.reducer;