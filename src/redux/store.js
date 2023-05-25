import { configureStore } from "@reduxjs/toolkit";

import  counterSlice  from './counterSlice';

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// const store = createStore(countReducer, enhancer(applyMiddleware(thunk)))
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store;
