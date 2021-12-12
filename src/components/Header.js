import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo
          src="https://assets.website-files.com/608c26a1dca9cb2fad91b23c/609ea9dfc1c1ae58b0b855a2_ames-logo-rework.svg"
          alt="AMES Logo"
        />
      </LogoContainer>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.nav`
  display: flex;
  top: 0;
  position: fixed;
  background: #fff;
  height: 5rem;
  width: 100%;
  z-index: 10;
  box-shadow: 1px 0px 5px 3px rgba(0, 0, 0, 0.2);
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
`

const Logo = styled.img`
  height: 4rem;
  width: auto;
`
