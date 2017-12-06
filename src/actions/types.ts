import { Action } from 'redux'

export type Actions = HomeSelectButtonScreen | HomeSelectGridLayoutScreen

export enum ActionTypes {
  HOME_SELECT_BUTTON = 'HOME_SELECT_BUTTON',
  HOME_SELECT_GRID_LAYOUT = 'HOME_SELECT_GRID_LAYOUT'
}

export interface HomeSelectButtonScreen extends Action {
  type: ActionTypes.HOME_SELECT_BUTTON
}

export interface HomeSelectGridLayoutScreen extends Action {
  type: ActionTypes.HOME_SELECT_GRID_LAYOUT
}