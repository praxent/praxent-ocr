import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/SignIn'
import ForgotLogin from '../screens/ForgotLogin'
import { unAuthRoutes } from '../constants/navigation'

const UnauthenticatedStackNav = createStackNavigator()

const UnauthenticatedStack = () => {
  return (
    <UnauthenticatedStackNav.Navigator>
      <UnauthenticatedStackNav.Screen name={unAuthRoutes.SIGN_IN} component={SignIn} />
      <UnauthenticatedStackNav.Screen
        name={unAuthRoutes.FORGOT_LOGIN}
        component={ForgotLogin}
        options={{
          title: 'Forgot Login',
        }}
      />
    </UnauthenticatedStackNav.Navigator>
  )
}

export default UnauthenticatedStack
export const UNAUTHENTICATED_STACK = 'UnauthenticatedStack'
