import { createSlice } from '@reduxjs/toolkit';

const ccySlice = createSlice({
  name: 'currency',
  initialState: { label: 'USD', symbol: '$', showSwitcher: false },
  reducers: {
    // Actions => action handler
    updateCcy: (state, action) => {
      const { label, symbol } = action.payload;
      state.label = label;
      state.symbol = symbol;
    },
    toggleSwitcher: (state, action) => {
      state.showSwitcher = !state.showSwitcher;
    },
  },
});

export const { updateCcy, toggleSwitcher } = ccySlice.actions;
export default ccySlice.reducer;
