import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  selected: Boolean
  title: string
  onPress?: () => void
}
interface State { }

// Simple list item like UITableViewCell
export default class ListItem extends React.PureComponent<Props, State> {

  render() {
    const textColor = this.props.selected ? 'red' : 'black'
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.item} >
        <View>
          <Text style={{ color: textColor }}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  private _onPress = () => {
    if (this.props.onPress !== undefined) {
      this.props.onPress()
    }
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderBottomColor: '#AAAAAA',
    borderBottomWidth: 2,
    padding: 10,
    height: 100
  }
})