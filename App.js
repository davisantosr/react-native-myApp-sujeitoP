import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
 
  render() {
    return (
      <View style={styles.area}>
        <Text style={[styles.texto1, styles.alinhaTexto]}>Text1</Text>
        <Text>Text1</Text>
        <Text>Text1</Text>
        <Text style={styles.texto1}>Text1</Text>
      </View>
    
    )
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop: 40,
  },
  texto1: {
    fontSize: 25,
    color: 'red',
  },
  alinhaTexto: {
    textAlign: 'center'
  }
})

export default App;