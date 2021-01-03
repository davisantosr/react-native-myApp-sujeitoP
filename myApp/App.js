import React, { Component } from 'react'
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native'
import {Picker} from '@react-native-picker/picker'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pizza: 0,
      pizzas: [
        {key: 1, nome: 'chesse', price: 30.00},
        {key: 2, nome: 'chocolate', price: 25.00},
        {key: 3, nome: 'chicken', price: 15.00},
        {key: 4, nome: 'beef', price: 50.00},
      ]
    }
  }


  render() {

    let pizzasItem = this.state.pizzas.map((value, idx) => {
      return  <Picker.Item value={idx} key={idx} label={value.nome}  />
    })
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Pizzas Menu</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(item, indx) => this.setState({pizza: item})}
        >
          {pizzasItem}
        </Picker>

        <Text style={styles.pizzas}>Your choice: {this.state.pizzas[this.state.pizza].nome}</Text>
        <Text style={styles.pizzas}>$ {this.state.pizzas[this.state.pizza].price.toFixed(2)}</Text>
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
