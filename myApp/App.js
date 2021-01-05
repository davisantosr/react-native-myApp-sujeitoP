import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import api from './src/services/api'

import Movie from './src/Movie'

export class App extends Component {
  constructor(props) {
    super(props) 

      this.state = {
        movies: []
      }
  }

  async componentDidMount() {
    const response = await api.get('/r-api/?api=filmes')
    this.setState({
      movies: response.data
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.movies}
          keyExtractor={item => item.id.toString()}
          renderItem={({item }) => <Movie data={item} /> }

        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
