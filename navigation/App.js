import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from './src/pages/Home'
import About from './src/pages/About'
import Contact from './src/pages/Contact'

import CustomDrawer from './src/components/CustomDrawer'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawer}
      >
        <Drawer.Screen name={'Home'} component={Home} options={{headerShown: true}} />
        <Drawer.Screen name={'About'} component={About} />
        <Drawer.Screen name={'Contact'} component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
