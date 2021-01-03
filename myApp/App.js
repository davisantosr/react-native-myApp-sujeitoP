import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {Picker} from '@react-native-picker/picker'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Pizzas Menu</Text>

        <Picker>
          <Picker.Item
            key={1}
            value={1}
            label={'Chesse'}
          />
          <Picker.Item
            key={2}
            value={2}
            label={'Chocolate'}
          />
          <Picker.Item
            key={3}
            value={3}
            label={'Chicken'}
          />
        </Picker>

        <Text style={styles.pizzas}>Your choice: Cheese</Text>
        <Text style={styles.pizzas}>$ 30.00</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20 
  },
  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15, 
    fontSize: 23,
    textAlign: 'center'
  }

})

export default App
