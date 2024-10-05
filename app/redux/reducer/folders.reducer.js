import { createSlice } from '@reduxjs/toolkit';

const foldersSlice = createSlice({
  name: 'folders',
  initialState: {
    name:'john'
  },
  reducers: {
    addFiles: (state, action) => {
      return {
        ...action.payload,
      };
    },
 
  },
});

export const { addFiles } = foldersSlice.actions;
export default foldersSlice.reducer;
