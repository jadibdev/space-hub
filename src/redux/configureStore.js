import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketreducer';
import missionsReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
<<<<<<< HEAD
    rocket: rocketReducer,
=======
    rockets: rocketReducer,
>>>>>>> ROCKET
    missions: missionsReducer,
  },
});

export default store;
