import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { authRoutes } from '../constants/navigation'

import Camera from '../screens/Camera'
import Home from '../screens/Home'
import Loading from '../screens/Loading'

const AuthenticatedStackNav = createStackNavigator()

const AuthenticatedStack = ({ navigation, route }) => {
  const determineInitialRoute = () => {
    return authRoutes.HOME
  }

  return (
    <AuthenticatedStackNav.Navigator initialRouteName={determineInitialRoute()}>
      <AuthenticatedStackNav.Screen
        name={authRoutes.HOME}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <AuthenticatedStackNav.Screen
        name={authRoutes.CAMERA}
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
      <AuthenticatedStackNav.Screen
        name={authRoutes.LOADING}
        component={Loading}
        options={{
          headerShown: false,
        }}
      />
    </AuthenticatedStackNav.Navigator>
  )
}

export default AuthenticatedStack
export const AUTHENTICATED_STACK = 'AuthenticatedStack'
