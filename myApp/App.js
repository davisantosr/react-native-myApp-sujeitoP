import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Switch 
} from 'react-native'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      status: false

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Switch 
          value={this.state.status}
          onValueChange={valueSwitch => this.setState({status: valueSwitch})}
        />

        <Text>{this.state.status ? 'True' : 'False'}</Text>

      </View>
    ) 
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

export default App
