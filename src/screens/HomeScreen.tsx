import * as React from 'react'
import { View, FlatList, ListRenderItem } from 'react-native'
import ListItem from '../components/ListItem'

interface Props { }
interface State { }

interface Model {
  key: string
}

class HomeScreen extends React.Component<Props, State>{

  // This is for React Navigation
  static navigationOptions = {
    title: "Welcome"
  }

  private dataSource: Model[] = [
    { key: 'Button' },
    { key: 'Grid Layout Flatlist' }
  ]

  render() {
    return (
      <FlatList
        data={this.dataSource}
        renderItem={this._renderItem}
      />
    )
  }

  private _renderItem: ListRenderItem<Model> = item => {
    let index = item.index
    return (
      <ListItem
        index={index}         // set index to an item to get index of the item with onPress callback
        title={item.item.key}
        selected={false}
        onPress={this._onSelectItem} />
    )
  }

  private _onSelectItem = (selectedIndex: number) => {
    console.log('ListItem was selected!! %d', selectedIndex)
    switch (selectedIndex) {
      case 0:
        this.props.navigation.navigate("Button")
        break
      case 1:
        this.props.navigation.navigate("Grid")
        break
    }
  }
}

export default HomeScreen