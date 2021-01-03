import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: ''
    }

    this.peganome = this.peganome.bind(this)
  }

  peganome(text) {
    this.setState({
      nome: text
    })
    
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={this.peganome}
        />
        <Text style={styles.text}>{this.state.nome}</Text>

      </View>     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10
  }, 
  text: {
    textAlign: 'center',
    fontSize: 25

  }
})

export default App;