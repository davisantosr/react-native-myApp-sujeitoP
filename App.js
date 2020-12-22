import React, { Component } from 'react';

import { View, Text, Image, Button } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nome: ''
    }

    this.entrar = this.entrar.bind(this)
  }


  entrar(nome) {
    this.setState({
      nome
    })
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 100, color: 'blue', textAlign: 'center'}}>
          {this.state.nome}
        </Text>
        <Button 
          title='button'
          onPress={() => this.entrar('Santos')} />
      </View>
    
    )
  }
}

export default App;