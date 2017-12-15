import * as React from 'react'
import { View, StyleSheet } from 'react-native'

interface Props { }
interface State { }

export default class MondrialLayoutContainer extends React.Component<Props, State> {

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3]}></View>
          <View style={[styles.box, styles.twoTimes]}></View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.twoTimes]}></View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3]}></View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.twoTimes]}></View>
          <View style={[styles.box, styles.box3]}></View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]}></View>
          <View style={styles.box}></View>
          <View style={[styles.box, styles.box3]}></View>
        </View>

        <View style={styles.row}>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box]}></View>
        </View>

        <View style={styles.row}>
          <View style={styles.box}></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: 'space-between',

    padding: 2, // row間のスキマ
  },
  box: {
    flex: 1,
    backgroundColor: 'blue',
    margin: 10, // セル間のスキマ
  },
  box2: {
    backgroundColor: 'green',
  },
  box3: {
    backgroundColor: 'orange'
  },
  twoTimes: {
    flex: 2
  }
})
