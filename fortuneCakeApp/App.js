import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textQuote: '',
      img: require('./src/cake.png'),
    }

    this.openCake = this.openCake.bind(this)

    this.quotes = [ 
      'You will have a better fortune in the next cookie',
      'Friends are chocolate chips in the cookie of life!',
      'Pros and cons for making food: Pro: Food. Con: Making'
    ]
  }  
 
  openCake() {
    let ramdomNum = Math.floor(Math.random() * this.quotes.length);

    this.setState({
      textQuote: '"'+ this.quotes[ramdomNum] + '"',
      img: require('./src/cakeopn.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={this.state.img}
        />

        <Text style={styles.textAbout}>
          {this.state.textQuote}
        </Text>

        <TouchableOpacity 
          style={styles.btn}
          onPress={this.openCake}  
        >
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
