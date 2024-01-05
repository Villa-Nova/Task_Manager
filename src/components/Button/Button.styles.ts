import styled from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'neutral'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: '#ff0055',
  secondary: '#5500ff',
  danger: '#ff0000',
  success: '#22ff00',
  neutral: '#ffffff',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 60px;
  height: 40px;

  color: ${(props) => props.theme['gray-700']};

  background-color: ${(props) => `
    ${buttonVariants[props.variant]}
  `};
`
