import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native'

import Slider from '@react-native-community/slider'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 50
    }
  }
  render() {

    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          value={50}
          onValueChange={selected => {
            this.setState({
              value: selected.toFixed(0)
            })
          }}
          minimumTrackTintColor='#00ff00'
          maximumTrackTintColor='#ff0000'
        />
        <Text>{this.state.value}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
})

export default App
