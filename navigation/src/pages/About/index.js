import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

function About({route}) {

  const navigation = useNavigation()

  navigation.setOptions({
    title: `Sobre ${route.params?.name}`
  })

  return (
    <View>
      <Text>Sobre</Text>
      <Text>{route.params.name}</Text>
      <Button
        title={'Voltar para a Home'}
        onPress={() => navigation.goBack()}
      />

      <Button 
        title={'Contact'}
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  )
}

export default About
