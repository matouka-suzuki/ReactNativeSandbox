import { Actions, ActionTypes } from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case ActionTypes.HOME_SELECT_BUTTON:
      console.log("[Reducer] Button!!!")
      return { ...state }
    case ActionTypes.HOME_SELECT_GRID_LAYOUT:
      console.log('[Reducer] Grid!!!')
      return { ...state }
    default:
      console.log('[Reducer] Default!!!')
      return state
  }
}