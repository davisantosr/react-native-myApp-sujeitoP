import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
 
  render() {
    return (
      <View style={{backgroundColor: '#333', flex:1}}>
        <View style={{height: 27, backgroundColor:'red'}}></View>
        <View style={{flex: 1, backgroundColor:'green'}}></View>
        <View style={{height: 27, backgroundColor:'red'}}></View>
        
      </View>
    
    )
  }
}

export default App;