import { Action as RdxAction } from 'redux'
import { ActionTypes } from './types'

export interface Action<T> extends RdxAction {
  readonly type: string,
  readonly payload: T
}

export interface ActionCreator<T> {
  readonly type: string
  (payload: T): Action<T>
}

const actionCreator = <T>(type: string): ActionCreator<T> =>
  Object.assign(
    (payload: T) => ({ type, payload }),
    { type }
  )

export const isType = <T>(action: Action<any>, actionCreator: ActionCreator<T>): action is Action<T> => action.type === actionCreator.type

/*--- Action Creator Definitions ---*/
export const createHomeSelectButtonAction = actionCreator<any>(ActionTypes.HOME_SELECT_BUTTON)
export const createHomeSelectGridLayoutAction = actionCreator<any>(ActionTypes.HOME_SELECT_GRID_LAYOUT)
export const createHomeSelectMondrianLayoutAction = actionCreator<any>(ActionTypes.HOME_SELECT_MONDRIAN_LAYOUT)