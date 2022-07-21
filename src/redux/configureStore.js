import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketreducer';
import missionsReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionsReducer,
  },
});

export default store;
