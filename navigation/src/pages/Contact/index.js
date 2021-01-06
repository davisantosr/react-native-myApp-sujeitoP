import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation, StackActions } from '@react-navigation/native'

function Contact({route}) {

  const navigation = useNavigation()

  return (
    <View>
      <Text>Contact</Text>
      <Button
        title={'Back'}
        onPress={() => navigation.goBack()}
      />
      <Button
        title={'Back to Home'}
        onPress={() => navigation.dispatch(StackActions.popToTop)}
      />
    </View>
  )
}

export default Contact
