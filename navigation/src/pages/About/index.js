import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function About({route}) {

  const navigation = useNavigation()
  return (
    <View>
      <Text>Sobre</Text>
      <Text>{route.params.name}</Text>
      <Button
        title={'Voltar para a Home'}
        onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default About
