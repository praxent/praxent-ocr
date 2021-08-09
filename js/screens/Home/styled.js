import styled from '@emotion/native'
import { colors, heading2, heading4 } from '../../styles/defaultStyles'

export const Container = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.darkPurple,
  borderWidth: 1,
})

export const ScreenSubtitle = styled.Text({
  ...heading4,
  color: colors.mediumDarkBlue,
  fontStyle: 'italic',
  textAlign: 'center',
})

export const ScreenTitle = styled.Text({
  ...heading2,
  color: colors.white,
  textAlign: 'center',
})
