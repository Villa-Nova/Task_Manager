import { Scroll, Timer } from 'phosphor-react'

import logo from '../../assets/v.png'
import { HeaderContainer, Logo } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo do site que é uma letra v." />
      </Logo>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
