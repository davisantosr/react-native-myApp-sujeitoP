import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function About() {

  const navigation = useNavigation()
  return (
    <View>
      <Text>Sobre</Text>
      <Button
        title={'Voltar para a Home'}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default About
