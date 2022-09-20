import { createSlice } from '@reduxjs/toolkit';

const ProductCategory = createSlice({
  name: 'category',
  initialState: { activeCategory: '' },
  reducers: {
    // Actions => action handler
    routeCategory: (state, action) => {
      let value = action.payload;
      state.activeCategory = value;
    },
  },
});

export const { currCategory, routeCategory } = ProductCategory.actions;
export default ProductCategory.reducer;
