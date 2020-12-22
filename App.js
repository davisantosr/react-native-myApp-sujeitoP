import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {

    let nome = 'Davi Santos'
    return (
      <View>
        <Text style={{color:'white', backgroundColor:'blue'}}>
          {nome}
        </Text>
        <Text style={{fontWeight:'bold'}}>Software Developer</Text>
        <Jobs altura={200} largura={100} nome={'Steve Jobs'}/>
          
      </View>
    )
  }
}

class Jobs extends Component {
  render() {
    return (
      <View>
        <Image 
          source={{uri: `https://images.unsplash.com/
            photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=
            rb-1.2.1&auto=format&fit=crop&w=1525&q=80` }}
          style={{width: this.props.largura, height: this.props.altura}} 
        />
        <Text> {this.props.nome} </Text>
      </View>
      
      
    )
  }
}

export default App;