import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,  
} from 'react-native'

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: this.props.data
    }
  }
  render(){
    return (
      <View>
        <Text> Feed</Text>
      </View>
    )
  }
}

export default List
