import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'


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

      <Button 
        title={'Toggle Drawer'}
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  )
}

export default Home
