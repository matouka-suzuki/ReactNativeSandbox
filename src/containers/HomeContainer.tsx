import * as React from 'react'
import { View, FlatList, ListRenderItem } from 'react-native'
import { connect, Dispatch } from 'react-redux'
import ListItem from '../components/ListItem'

import * as ActionCreators from '../redux/actions/creators'

interface Props { }

// Props set by mapDispatchToProps
interface DispatchProps {
  handleSelectButtonEvent: () => any
  handleSelectGridLayoutEvent: () => any
  handleSelectMondrianLayoutEvent: () => any
}
interface State { }

interface Model {
  key: string
}

class HomeScreen extends React.Component<Props & DispatchProps, State>{

  // This is for React Navigation
  static navigationOptions = {
    title: "Welcome"
  }

  private dataSource: Model[] = [
    { key: 'Button' },
    { key: 'Grid Layout Flatlist' },
    { key: 'Mondrian layout' }
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
    switch (selectedIndex) {
      case 0:
        let temp = this.props
        this.props.handleSelectButtonEvent() // call action
        this.props.navigation.navigate("Button")
        break
      case 1:
        this.props.handleSelectGridLayoutEvent() // call action
        this.props.navigation.navigate("Grid")
        break
      case 2:
        this.props.handleSelectMondrianLayoutEvent()
        this.props.navigation.navigate("Mondrian")
    }
  }
}

// Mapping state and actions
// https://stackoverflow.com/a/39519596
const mapStateToProps = (state: any, ownProps?: Props): Props => {
  return {}
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    // Need to pass an plain object to dispatch() to call action as prop's method.
    handleSelectButtonEvent: () => { dispatch(ActionCreators.createHomeSelectButtonAction({})) },
    handleSelectGridLayoutEvent: () => { dispatch(ActionCreators.createHomeSelectGridLayoutAction({})) },
    handleSelectMondrianLayoutEvent: () => { dispatch(ActionCreators.createHomeSelectMondrianLayoutAction({})) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)