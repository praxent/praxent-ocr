import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from 'react-native-splash-screen'

import UnauthenticatedStack, { UNAUTHENTICATED_STACK } from './UnauthenticatedStack'
import AuthenticatedStack, { AUTHENTICATED_STACK } from './AuthenticatedStack'

type AuthenticationSwitchPropsType = {}

const AuthenticationStack = createStackNavigator()

const AuthenticationSwitch: React.FC<AuthenticationSwitchPropsType> = () => {
  // useEffect(() => {
  //   SplashScreen.hide()
  // }, [])

  const token = true

  return (
    <AuthenticationStack.Navigator>
      {!token ? (
        <AuthenticationStack.Screen
          name={UNAUTHENTICATED_STACK}
          component={UnauthenticatedStack}
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <AuthenticationStack.Screen
          name={AUTHENTICATED_STACK}
          component={AuthenticatedStack}
          options={{
            headerShown: false,
          }}
        />
      )}
    </AuthenticationStack.Navigator>
  )
}

export default AuthenticationSwitch
