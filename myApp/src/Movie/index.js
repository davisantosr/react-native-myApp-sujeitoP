import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export class Movie extends Component {
  render() {
    const {nome, foto, } = this.props.data
    return (
      <View>
        <View style={styles.card}>
          <Text style={styles.title}>
            {nome}
          </Text>
          <Image 
            style={styles.poster}
            source={{uri: foto}}
          />
          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={() => alert(nome)}>
              <Text style={styles.btnText}>
                READ MORE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000', 
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8, 
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  title: {
    fontSize: 18, 
    padding: 15
  },
  poster: {
    height: 250,
    zIndex: 2,
  },
  btnArea: {
    alignItems: 'flex-end',
    marginTop: -40, 
    zIndex: 9, 
  },
  btn: {
    width: 100, 
    backgroundColor: '#09a6FF',
    opacity: 1, 
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  }, 
  btnText: {
    textAlign: 'center',
    color: '#fff'
  }

})

export default Movie
