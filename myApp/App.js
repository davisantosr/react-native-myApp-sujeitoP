import React, { Component } from 'react'
import { View, Text,  StyleSheet, FlatList, ActivityIndicator } from 'react-native'

import api from './src/services/api'

import Movie from './src/Movie'

export class App extends Component {
  constructor(props) {
    super(props) 

      this.state = {
        movies: [],
        loading: true,
      }
  }

  async componentDidMount() {
    const response = await api.get('/r-api/?api=filmes')
    this.setState({
      movies: response.data,
      loading: false
    })
  }

  render() {
    if(this.state.loading) {
      return(
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1,}}>
          <ActivityIndicator 
            color={'#09a6FF'}        
            size={50}
          />
        </View>

      )

    } else {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
