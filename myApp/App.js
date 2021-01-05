import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Button,
  Modal,

} from 'react-native'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalVisible: false
    }

    this.handleBtnClick = this.handleBtnClick.bind(this)
  }

  handleBtnClick() {
    this.setState({
      modalVisible: !this.state.modalVisible
    })
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Button title={'Enter'} onPress={this.handleBtnClick} />
       <Modal
        animationType={'slide'}
        visible={this.state.modalVisible}
       >
         <View style={{backgroundColor: '#292929', flex: 1}}>
           <Text style={{color: '#fff', fontSize: 28}}>Welcome!</Text>
           <Button title={'Exit'} onPress={this.handleBtnClick} />
         </View>
       </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#DDD'
  },
 
})

export default App
