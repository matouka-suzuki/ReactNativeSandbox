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
    return (
      <ListItem title={item.item.key} selected={false} onPress={this._onSelectItem} />
    )
  }

  private _onSelectItem = () => {
    console.log('ListItem was selected!!')
  }
}

export default Home