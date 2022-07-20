import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketreducer';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;
