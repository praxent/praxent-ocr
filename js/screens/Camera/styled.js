import styled from '@emotion/native'
import { bodyText, colors } from '../../styles/defaultStyles'

export const CaptureButton = styled.TouchableOpacity({
  borderColor: colors.teal,
  borderRadius: 50,
  borderWidth: 2,
  padding: 5,
})

export const CaptureButtonContainer = styled.View({
  position: 'absolute',
  right: 0,
  bottom: 20,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const CaptureButtonInner = styled.View({
  width: 40,
  height: 40,
  backgroundColor: colors.teal,
  borderColor: colors.teal,
  borderRadius: 50,
  borderWidth: 1,
})

export const Container = styled.View({
  flex: 1,
  position: 'relative',
  backgroundColor: colors.darkPurple,
})

export const FlipButton = styled.TouchableOpacity({
  width: 75,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 15,
  marginLeft: 15,
  borderColor: colors.teal,
  borderRadius: 25,
  borderWidth: 1,
  backgroundColor: colors.transparent,
})

export const GoBackContainer = styled.View({
  position: 'absolute',
  zIndex: 999,
})

export const GoBackButton = styled.TouchableOpacity({
  padding: 10,
  alignItems: 'center',
  flexDirection: 'row',
})

export const GoBackIcon = styled.Image({
  width: 20,
  height: 20,
  marginRight: 10,
})

export const GoBackText = styled.Text({
  ...bodyText,
  color: colors.white,
  fontSize: 24,
})
