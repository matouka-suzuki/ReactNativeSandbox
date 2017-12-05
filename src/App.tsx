/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

interface Props { }
interface State { }

export default class App extends React.Component<Props, State> {

  private data: { key: string }[] = [
    { key: 'a' },
    { key: 'b' },
    { key: 'c' },
    { key: 'd' },
    { key: 'e' },
    { key: 'f' },
    { key: 'g' }
  ]

  render() {
    return (
      <FlatList
        data={this.data}
        renderItem={this._renderItem}
        contentContainerStyle={styles.list}
        onEndReachedThreshold={0}
        onEndReached={this._onEndReached}
        // Use numColomns instead of flex-wrap: 'wrap' in Styles
        numColumns={2}
      />
    );
  }

  private _renderItem = (item: any) => {
    return (
      <View style={styles.item} />
    )
  }

  private _onEndReached = (info: { distanceFromEnd: number }) => {
    console.log('onEndReached', info.distanceFromEnd)
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    margin: 5,
    minWidth: 150,
    maxWidth: 200,
    height: 304,
    maxHeight: 304,
    backgroundColor: '#CCC'
  }
});
