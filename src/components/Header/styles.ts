import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        transition: all 0.3s ease-out;
        border-bottom: 3px solid ${(props) => props.theme['blue-600']};
      }

      &.active {
        color: ${(props) => props.theme['blue-100']};
      }
    }
  }
`

export const Logo = styled.div`
  width: 2.5rem;
  height: 2.5rem;

  > img {
    width: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`
