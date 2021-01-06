import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/pages/Home'
import About from './src/pages/About'
import Contact from './src/pages/Contact'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={Home}
          options={{
            title: 'Dashboard',
            headerStyle: {
              backgroundColor: '#121212',
            },
            headerTintColor: '#fff', 
            // headerShown: false
          }}
          />
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='Contact' component={Contact}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}