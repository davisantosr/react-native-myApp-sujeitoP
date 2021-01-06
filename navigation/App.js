import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './src/pages/Home'
import About from './src/pages/About'
import Contact from './src/pages/Contact'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

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

export function Tabs() {
  return (
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
      </Tab.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Tabs} options={{ headerShown: false}} />
        <Stack.Screen name={'Contact'} component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}