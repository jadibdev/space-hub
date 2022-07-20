/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-await */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: null,
  joinedMissions: [],
  reserved: null,
};

export const getMissions = createAsyncThunk(
  'redux/getMissions',
  async () => await fetch('https://api.spacexdata.com/v3/missions').then(
    (res) => res.json(),
  ),
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      state.joinedMissions.push(action.payload);
      state.reserved = true;
    },
    cancelMission(state, action) {
      state.joinedMissions = state.joinedMissions.filter((id) => id !== action.payload);
      state.reserved = false;
    },
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

export const { joinMission, cancelMission } = missionsSlice.actions;
export default missionsSlice.reducer;
