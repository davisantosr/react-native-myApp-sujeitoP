import React, { Component } from 'react';

import { 
  View, 
  StyleSheet, 
  FlatList,
  Text

} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [
        {id: 1, nome:'Davi', idade: 100, email: 'email.com'},
        {id: 2,nome:'Joao', idade: 200, email: 'email.com'},
        {id: 3,nome:'Jose', idade: 400, email: 'email.com'},
        {id: 4,nome:'Salomao', idade: 500, email: 'email.com'},
      ]
    }
  }

  

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Pessoa data={item} />}
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


class Pessoa extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles2.textPessoa}>{this.props.data.nome}</Text>
        <Text style={styles2.textPessoa}>{this.props.data.idade}</Text>
        <Text style={styles2.textPessoa}>{this.props.data.email}</Text>
      </View>
    )
  }
}

const styles2 = StyleSheet.create({
  textPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15
  }
})