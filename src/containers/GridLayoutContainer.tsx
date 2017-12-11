import * as React from 'react'
import {
  View,
  Text,
  FlatList,
  ListRenderItem, // To specify type of datasource and to get index in rendering method.
  Dimensions,
  StyleSheet
} from 'react-native'

interface Props { }
interface State { }

interface Model {
  key: string
}

export default class GridLayoutScreen extends React.Component<Props, State> {

  // This is for React Navigation
  static navigationOptions = {
    title: "Grid layout"
  }

  private data: Model[] = [
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
        // Use 'numColomns' instead of flex-wrap: 'wrap' in Styles
        numColumns={2}
      />
    );
  }

  private _renderItem: ListRenderItem<Model> = info => {
    const { index, item } = info
    return (
      < View style={[styles.item, this._dynamicStyleGridWidth()]} >
        <Text>{index}</Text>
        <Text>{item.key}</Text>
      </View >
    )
  }

  private _onEndReached = (info: { distanceFromEnd: number }) => {
    console.log('onEndReached', info.distanceFromEnd)
  }

  /**
   * Returns grid layout's width dynamically
   */
  private _dynamicStyleGridWidth = () => {
    let { width } = Dimensions.get('screen')
    let margin = 8
    let styles = StyleSheet.create({
      grid: {
        margin: margin,
        minWidth: 100,
        maxWidth: (width - margin * 4) / 2
      }
    })
    return styles.grid
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
  item: {
    flex: 1,
    height: 304,
    maxHeight: 304,
    backgroundColor: '#CCC'
  }
});
