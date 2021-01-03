import React from 'react'
import {
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      timer: 0
    }

    //timer variable
    this.chronoNum = null
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }

  handleStart() {
    if(this.chronoNum !== null){
      clearInterval(this.chronoNum)
      this.timer = null
    } else {
      this.chronoNum = setInterval(() => {
        this.setState({
          timer: this.state.timer + 0.1
        }, 100)
      })
    }    
  }

  handleStop() {
    alert('stop ')
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./chronometer.png')}
          style={styles.imgChrono}
        />

        <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>


        <View style={styles.btnsArea}>
          <TouchableOpacity 
            onPress={this.handleStart}
            style={styles.btn}
          >
              <Text style={styles.btnText}>Go</Text>            
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={this.handleStop}
            style={styles.btn}
          >
              <Text style={styles.btnText}>Stop</Text>
          </TouchableOpacity>
        </View>



      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnsArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#fff',
    height: 40, 
    margin: 17,
    borderRadius: 9

  },
  btnText: {
    fontSize: 20, 
    fontWeight: 'bold',
    color: '#00aeef'

  }
})

export default App
