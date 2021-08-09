import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AuthenticationSwitch from './navigators/AuthenticationSwitch'

const App = () => {
  return (
    <NavigationContainer>
      <AuthenticationSwitch />
    </NavigationContainer>
  )
}

export default App
