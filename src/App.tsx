/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'

import HomeScreen from './screens/HomeScreen'
import ButtonScreen from './screens/ButtonScreen'
import GridLayoutScreen from './screens/GridLayoutScreen'

interface Props { }
interface State { }

const BasicApp = StackNavigator({
  Main: { screen: HomeScreen },
  Button: { screen: ButtonScreen },
  Grid: { screen: GridLayoutScreen }
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