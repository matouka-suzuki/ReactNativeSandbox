import HomeReducer from './HomeReducer'
import { combineReducers, Reducer } from 'redux';
import { Action } from 'redux';

export default combineReducers({
  home: <Reducer<any>>HomeReducer
})