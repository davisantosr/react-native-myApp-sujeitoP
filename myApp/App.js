import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,

} from 'react-native'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
       
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#DDD'
  },
 
})

export default App
