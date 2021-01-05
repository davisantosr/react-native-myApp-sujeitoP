import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,  
} from 'react-native'

class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      feed: this.props.data
    }

    this.mostraLikes = this.mostraLikes.bind(this)
    this.handleLikes = this.handleLikes.bind(this)
    this.loadHeart = this.loadHeart.bind(this)

  }

  loadHeart(likeada) {
    return likeada 
    ? require('../img/likeada.png') 
    : require('../img/like.png') 
  }

  mostraLikes(likers) {
    let {feed} = this.state

    if(feed.likers <= 0) {
      return
    }

    return(
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  handleLikes() {
    let feed = this.state.feed
    if(feed.likeada === true){
      this.setState({
        feed: {
          ...feed,
          likeada: false, 
          likers: feed.likers -1
        }
      })
    } else {
      let {feed} = this.state
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
        
      })
    }
  }

  render(){
    return (
      <SafeAreaView style={styles.feedArea}>
        <View style={styles.viewProfile}>
          <Image 
            source={{uri:this.state.feed.imgperfil}}
            style={styles.picProfile}
          />

          <Text style={styles.userName}>{this.state.feed.nome}</Text>
        </View>

        <Image 
          style={styles.picFeed}
          source={{uri: this.state.feed.imgPublicacao}}
          resizeMode='cover'
        />

        <View style={styles.btnsArea}>
          <TouchableOpacity
            onPress={this.handleLikes}
          >
            <Image 
              source={this.loadHeart(this.state.feed.likeada)}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image 
              source={require('../img/send.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {
          this.mostraLikes(this.state.feed.likers)
        }

        <View style={styles.infoView}>
          <Text style={styles.infoViewName}>
            {this.state.feed.nome}
          </Text>

          <Text style={styles.descInfo}>
            {this.state.feed.descricao}
          </Text>
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  feedArea:{
    marginBottom: 70
  },
  viewProfile: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  picProfile: {
    width: 50,
    height: 50, 
    borderRadius: 25, 

  },
  userName: {
    fontSize: 22, 
    textAlign: 'left',
    color: '#000000',

  },
  picFeed: {
    flex: 1,
    height: 400, 
    alignItems: 'center'
  },
  btnsArea: {
    flexDirection: 'row', 
    padding: 5,
    
  },
  icon: {
    width: 33,
    height: 33, 

  },
  btnSend: {
    paddingLeft: 5,
  },
  infoView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  descInfo: {
    paddingLeft: 5, 
    fontSize: 15, 
    color: '#000'

  },
  infoViewName: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5,
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  }
  
})

export default List
