import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput, 
  TouchableOpacity,
  Keyboard,

} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'


export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '', 
      name: '', 
    }
    this.handleAddName = this.handleAddName.bind(this)
  }

  componentDidMount() {
  }

  async componentDidUpdate(_, prevState){
    const {name} = this.state
    if(prevState !== name) {
      await AsyncStorage.setItem('name', name)
    }
  }

  handleAddName() {
    this.setState({
      name: this.state.input
    });

    alert('Save successfully')
    Keyboard.dismiss()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewInput}>
          <TextInput 
            style={styles.input}
            value={this.state.input}
            onChangeText={text => this.setState({input: text})}
            underlineColorAndroid='transparent'
          />
          <TouchableOpacity onPress={this.handleAddName}>
            <Text style={styles.btn}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>
          {this.state.name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 20, 
    alignItems: 'center'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 350, 
    height: 40, 
    borderColor:'#000',
    borderWidth: 1,
    padding: 10
  },
  btn: {
    backgroundColor: '#222', 
    color: '#fff', 
    height: 40,
    padding: 10, 
    marginLeft: 4
  },
  name: {
    marginTop: 15,
    fontSize: 30, 
    textAlign: 'center'
  }
})

export default App
