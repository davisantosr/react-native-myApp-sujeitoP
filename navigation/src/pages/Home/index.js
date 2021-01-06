import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function About() {
  
  const navigation = useNavigation()

  function goAbout() {
    navigation.navigate('Sobre', {
      name: 'Davi', 
      email: 'davi-rocha2@email.com'
    })
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
