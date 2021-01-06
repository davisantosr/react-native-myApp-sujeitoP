import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './src/pages/Home'
import About from './src/pages/About'
import Contact from './src/pages/Contact'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'About'} component={About} />
        <Tab.Screen name={'Contact'} component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}