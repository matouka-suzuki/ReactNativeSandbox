import * as React from 'react'
import { View, FlatList, ListRenderItem } from 'react-native'
import ListItem from '../components/ListItem'

interface Props { }
interface State { }

interface Model {
  key: string
}

class Home extends React.Component<Props, State>{

  private dataSource: Model[] = [
    { key: 'OnlyButton' },
    { key: 'GridFlatList' }
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
  }
}

export default Home