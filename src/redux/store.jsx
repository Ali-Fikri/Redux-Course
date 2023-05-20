import { createStore, applyMiddleware } from 'redux'
import countReducer from './reducers/countReducer';
import thunk from 'redux-thunk';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(countReducer, enhancer(applyMiddleware(thunk)))

export default store;
