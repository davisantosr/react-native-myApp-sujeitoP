import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './src/pages/Home'
import About from './src/pages/About'
import Contact from './src/pages/Contact'

const Tab = createBottomTabNavigator()

const icons = {
  Home: {
    name: 'ios-home'
  },
  About: {
    name: 'ios-people'
  },
  Contact: {
    name: 'ios-call'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => {
            const {name} = icons[route.name]
            return <Icon name={name} color={color} size={size} />
          }
        })}
        tabBarOptions={{
          style:{
            backgroundColor: '#121212'
          },
          activeTintColor: '#FFF',
          inactiveTintColor: '#FF0000'
        }}
      >
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'About'} component={About} />
        <Tab.Screen name={'Contact'} component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}