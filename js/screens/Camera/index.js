import React, { useRef, useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { RNCamera } from 'react-native-camera'

import {
  CaptureButton,
  CaptureButtonContainer,
  CaptureButtonInner,
  Container,
  GoBackButton,
  GoBackContainer,
  GoBackText,
} from './styled'
import { colors } from '../../styles/defaultStyles'
import { ScrollView } from 'react-native-gesture-handler'

const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef(null)
  const [flash, setFlash] = useState('off')
  const [type, setType] = useState('back')
  const [ocrElements, setOcrElements] = useState([])

  const textRecognized = (object) => {
    const { textBlocks } = object
    setOcrElements(textBlocks)
  }

  const snap = () => {
    console.log('Snap!')
  }

  const _renderOCRElements = () => {
    return (
      <View
        style={{
          backgroundColor: colors.lightTeal,
          borderColor: colors.teal,
          borderRadius: 5,
          borderWidth: 1,
          margin: 10,
          padding: 15,
        }}>
        <Text style={{ color: colors.darkPurple, fontSize: 24, fontWeight: 'bold' }}>
          OCR Elements:
        </Text>
        {ocrElements.map((element, index) => {
          return <Text key={index + Math.random()}>[[ {element.value} ]]</Text>
        })}
      </View>
    )
  }

  const _getScreenContents = () => {
    return (
      <>
        <View
          style={{
            height: Dimensions.get('window').height - 100,
            minHeight: 420,
            marginTop: 15,
            flex: 1,
            backgroundColor: colors.shadow,
            borderWidth: 1,
          }}>
          <RNCamera
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            captureAudio={false}
            flashMode={flash}
            onTextRecognized={textRecognized}
            ref={cameraRef}
            style={{ flex: 1 }}
            trackingEnabled
            type={type}>
            <>
              {_renderOCRElements()}
              <CaptureButtonContainer>
                <CaptureButton onPress={() => snap()}>
                  <CaptureButtonInner />
                </CaptureButton>
              </CaptureButtonContainer>
            </>
          </RNCamera>
        </View>
      </>
    )
  }

  return (
    <>
      <Container>
        <SafeAreaView>
          <GoBackContainer>
            <GoBackButton onPress={() => navigation.goBack()}>
              <GoBackText>Go Back</GoBackText>
            </GoBackButton>
          </GoBackContainer>
          <ScrollView>{_getScreenContents()}</ScrollView>
        </SafeAreaView>
      </Container>
    </>
  )
}

export default CameraScreen
