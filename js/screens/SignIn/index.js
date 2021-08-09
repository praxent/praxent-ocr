import React from 'react'
import { Text, View } from 'react-native'

import Button from '../../components/Button'

import { unAuthRoutes } from '../../constants/navigation'

const SignIn = ({ navigation }) => {
  return (
    <View>
      <Text>SignIn Screen</Text>
      <Button
        onPress={() => navigation.navigate(unAuthRoutes.FORGOT_LOGIN)}
        text={'Forgot Password?'}
      />
    </View>
  )
}

export default SignIn
export const SIGN_IN = 'SignIn'
