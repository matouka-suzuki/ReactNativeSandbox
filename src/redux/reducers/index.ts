import HomeReducer from './HomeReducer'
import { combineReducers } from 'redux';

export default combineReducers({
  home: HomeReducer
})