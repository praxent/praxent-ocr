import React from 'react'

import { ButtonContainer, ButtonText } from './styled'

const Button = ({ onPress, text }) => {
  return (
    <>
      <ButtonContainer onPress={onPress}>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    </>
  )
}

export default Button
