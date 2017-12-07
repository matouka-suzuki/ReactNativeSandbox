import { Action as RdxAction } from 'redux'
import { Action, isType, createHomeSelectButtonAction, createHomeSelectGridLayoutAction } from '../actions/creators'

const INITIAL_STATE = {}

export default <T>(state = INITIAL_STATE, action: Action<T>) => {
  // redux.Reducerの型に合わせるためにAction<any>>にダウンキャストする
  if (isType<{}>(action, createHomeSelectButtonAction)) {
    console.log("[Reducer] Button!!!")
    return { ...state }
  }
  else if (isType<{}>(action, createHomeSelectGridLayoutAction)) {
    console.log('[Reducer] Grid!!!')
    return { ...state }
  }
  else {
    console.log('[Reducer] Default!!!')
    return state
  }
}