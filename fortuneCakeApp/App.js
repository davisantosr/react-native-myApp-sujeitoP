import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

class App extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('./src/cake.png')}
        />

        <Text style={styles.textAbout}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Corporis obcaecati id consequuntur!
        </Text>

        <TouchableOpacity style={styles.btn}>
          <View style={styles.btnArea}>
            <Text style={styles.btnText}>Open</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 250, 
    height: 250
  },
})

export default App
