import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Movie extends Component {
  render() {
    const {nome} = this.props.data
    return (
      <View>
        <Text>
          {nome}
        </Text>
      </View>
    )
  }
}

export default Movie
