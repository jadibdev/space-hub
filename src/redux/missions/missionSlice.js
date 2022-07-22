import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: null,
  joinedMissions: [],
  reserved: null,
};

export const getMissions = createAsyncThunk(
  'redux/getMissions',
  async () => fetch('https://api.spacexdata.com/v3/missions').then(
    (res) => res.json(),
  ),
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission(state, action) {
      const localState = state;
      state.joinedMissions.push(action.payload);
      localState.reserved = true;
    },
    cancelMission(state, action) {
      const localState = state;
      localState.joinedMissions = state.joinedMissions.filter((id) => id !== action.payload);
      localState.reserved = false;
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      const localState = state;
      localState.status = 'loading';
    },
    [getMissions.fulfilled]: (state, action) => {
      const localState = state;
      localState.status = 'success';
      localState.missions = action.payload;
    },
    [getMissions.rejected]: (state) => {
      const localState = state;
      localState.status = 'failed';
    },
  },
});

export const { joinMission, cancelMission } = missionsSlice.actions;
export default missionsSlice.reducer;
