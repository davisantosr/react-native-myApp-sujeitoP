import React from 'react'
import { View, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer() {
  return (
    <DrawerContentScrollView>
      <Text>Hello World</Text>
    </DrawerContentScrollView>
  )
}
