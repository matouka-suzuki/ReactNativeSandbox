import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import styles from './styles'

interface Props { }
interface State {
  pressing: Boolean
}

export default class Button extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { pressing: false }
  }

  private _onPressIn = () => {
    this.setState({ pressing: true })
  }

  private _onPressOut = () => {
    this.setState({ pressing: false })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
          style={styles.touchable}
        >
          <View style={styles.button}>
            <Text style={styles.welcome}>
              {this.state.pressing ? 'Pressing' : 'Push Me!!'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}