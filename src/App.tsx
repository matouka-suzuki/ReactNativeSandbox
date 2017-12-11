/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './redux/reducers'

import HomeContainer from './containers/HomeContainer'
import ButtonContainer from './containers/ButtonContainer'
import GridLayoutContainer from './containers/GridLayoutContainer'

interface Props { }
interface State { }

const BasicApp = StackNavigator({
  Main: { screen: HomeContainer },
  Button: { screen: ButtonContainer },
  Grid: { screen: GridLayoutContainer }
})

const store = createStore(reducer)

export default class App extends React.Component<Props, State> {

  render() {
    return (
      <Provider store={store}>
        <BasicApp />
      </Provider>
    );
  }

}