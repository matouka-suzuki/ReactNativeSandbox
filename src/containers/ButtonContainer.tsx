import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from '../components/Button'

interface Props { }
interface State { }

export default class ButtonScreen extends React.Component<Props, State> {

  // This is for React Navigation
  static navigationOptions = {
    title: "Here is a button"
  }

  render() {
    return (
      <Button />
    )
  }
}