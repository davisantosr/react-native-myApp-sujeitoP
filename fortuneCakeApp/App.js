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
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250, 
    height: 250
  },
  textAbout: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30, 
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btn: {
    width: 230, 
    height: 50, 
    borderWidth: 2, 
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  btnText: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#dd7b22',

  }
})

export default App
