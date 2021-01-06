import React, { Component } from 'react'
import {
  View, 
  Text, 
  StyleSheet
 } from 'react-native'
 import Converter from './src/Converter'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Converter currencyA='USD' currencyB='BRL' />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default App
