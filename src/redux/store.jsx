import { createStore } from 'redux'
import countReducer from './reducers/countReducer';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(countReducer, enhancer())

export default store;
