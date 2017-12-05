import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from '../components/Button'

interface Props { }
interface State { }

export default class OnlyButton extends React.Component<Props, State> {

  render() {
    return (
      <Button />
    )
  }
}