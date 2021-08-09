import styled from '@emotion/native'
import { colors, heading5 } from '../../styles/defaultStyles'

export const ButtonContainer = styled.TouchableOpacity({
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 15,
  borderColor: colors.teal,
  borderRadius: 25,
  borderWidth: 1,
})

export const ButtonText = styled.Text({
  ...heading5,
  color: colors.white,
  textAlign: 'center',
  textTransform: 'uppercase',
})
