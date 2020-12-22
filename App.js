import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {

    let nome = 'Davi Santos'
    let image = `https://images.unsplash.com/
      photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=
      rb-1.2.1&auto=format&fit=crop&w=1525&q=80`
    return (
      <View>
        <Text style={{color:'white', backgroundColor:'blue'}}>
          {nome}
        </Text>
        <Text style={{fontWeight:'bold'}}>Software Developer</Text>
        {/* <Image 
          source={{uri:image}}
          style={{width: '30'}}
          
        /> */}
          
      </View>
    )
  }
}

export default App;