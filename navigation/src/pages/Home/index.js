import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function About() {
  
  const navigation = useNavigation()

  function goAbout() {
    navigation.navigate('Sobre')
  }
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Go to About'
        onPress={goAbout}
      />
    </View>
  )
}

export default About
