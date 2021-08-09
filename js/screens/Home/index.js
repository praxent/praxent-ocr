import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Button from '../../components/Button'
import CustomStatusBar from '../../components/CustomStatusBar'
import { VerticalSpacer } from '../../components/StyleHelpers'

import { authRoutes } from '../../constants/navigation'

import { Container, ScreenSubtitle, ScreenTitle } from './styled'

const Home = ({ navigation }) => {
  return (
    <>
      <Container>
        <CustomStatusBar isLight />
        <SafeAreaView>
          <View>
            <ScreenTitle>Praxent OCR</ScreenTitle>
            <ScreenSubtitle>Proof of concept</ScreenSubtitle>
            <VerticalSpacer padding={20} />
            <Button onPress={() => navigation.navigate(authRoutes.CAMERA)} text={'Open Camera'} />
          </View>
        </SafeAreaView>
      </Container>
    </>
  )
}

export default Home
