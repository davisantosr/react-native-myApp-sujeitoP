import React, { Component } from 'react';

import { 
  View, 
  StyleSheet, 
  FlatList

} from 'react-native';

class App extends Component {

  

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={}
          renderItem={}
        />
      </View>     
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})

export default App;