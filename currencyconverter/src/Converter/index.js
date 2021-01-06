import React, { Component } from 'react'
import {
  View, 
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native'

import api from '../services/api'
import {API_KEY} from "@env"

export class Converter extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      currencyA: props.currencyA,
      currencyB: props.currencyB,
      currencyB_value: 0.00,
      converted: 0, 

    }
    this.handleConversor = this.handleConversor.bind(this)
  }

  async handleConversor() {
    console.log('ok')
    let from_to = this.state.currencyA + '_' + this.state.currencyB
    const response = await api.get(`convert?q=${from_to}&compact=ultra&apiKey=${API_KEY}`)
    let value = response.data[from_to]
    
    let result = (value * parseFloat(this.state.currencyB_value))

    this.setState({
      converted: result.toFixed(2)
    })

    Keyboard.dismiss()
  }

  render() {
    const { currencyA, currencyB } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title}> {currencyA} to {currencyB}  </Text>
        <TextInput 
          placeholder={'Value to converter'}
          style={styles.input}
          onChangeText={ currencyB_value => this.setState({currencyB_value})}
          keyboardType={'numeric'}
        />
        <TouchableOpacity 
          style={styles.btn}
          onPress={this.handleConversor}
          >
          <Text style={styles.btnText}>
            Converter
          </Text>
        </TouchableOpacity>

        <Text style={styles.amount}>
          {this.state.converted === 0 ? '' : this.state.converted }
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30, 
    fontWeight: 'bold',
    color: '#000'
  },
  input: {
    width: 280, 
    height: 45,
    backgroundColor: '#ccc', 
    textAlign: 'center',
    marginTop: 15, 
    fontSize: 20, 
    color: '#000', 
    borderRadius: 5, 
  },
  btn: {
    width: 150, 
    height: 45, 
    backgroundColor: '#ff0000',
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 15, 
  },
  btnText: {
    fontSize: 17, 
    fontWeight: 'bold',
    color: '#fff',
  },
  amount: {
    fontSize: 30, 
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,


  }
})

export default Converter
