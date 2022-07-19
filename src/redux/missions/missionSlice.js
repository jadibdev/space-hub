/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-await */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk(
  'redux/getMissions',
  async () => await fetch('https://api.spacexdata.com/v3/missions').then(
    (res) => res.json(),
  ),
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: null,
  },
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [getMissions.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getMissions.fulfilled]: (state, action) => {
      state.status = 'success';
      state.missions = action.payload;
    },
    [getMissions.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default missionsSlice.reducer;
