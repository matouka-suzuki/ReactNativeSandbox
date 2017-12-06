/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { } from 'react-native';
import { StackNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import ButtonScreen from './screens/ButtonScreen'
import GridLayoutScreen from './screens/GridLayoutScreen';

interface Props { }
interface State { }

const BasicApp = StackNavigator({
  Main: { screen: HomeScreen },
  Button: { screen: ButtonScreen },
  Grid: { screen: GridLayoutScreen }
})

export default class App extends React.Component<Props, State> {

  render() {
    return (
      <BasicApp />
    );
  }

}