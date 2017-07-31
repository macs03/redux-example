import {
  createStore, applyMiddleware, combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';


const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('new state', store.getState());
  return result;
}


export default createStore(combineReducers(reducers), applyMiddleware(logger, thunk));