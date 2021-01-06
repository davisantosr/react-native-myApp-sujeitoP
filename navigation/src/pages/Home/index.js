import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function Home() {

  const navigation = useNavigation()

  return (
    <View>
      <Text>
        Home
      </Text>
      <Button 
        title={'Contact'}
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  )
}

export default Home
