import { Actions, ActionTypes, HomeSelectButtonScreen, HomeSelectGridLayoutScreen } from './types'

export function homeSelectButton(): HomeSelectButtonScreen {
  return { type: ActionTypes.HOME_SELECT_BUTTON }
}

export function homeSelectGridLayoutScreen(): HomeSelectGridLayoutScreen {
  return { type: ActionTypes.HOME_SELECT_GRID_LAYOUT }
}