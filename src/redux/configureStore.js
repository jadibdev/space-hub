import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rocket/rocketreducer';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
});

export default store;
