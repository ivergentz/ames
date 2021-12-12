import React from 'react'
import {
  FaCalendarAlt,
  FaPagelines,
  FaRegNewspaper,
  FaUserAlt,
} from 'react-icons/fa'
import styled from 'styled-components'

const Foter = () => {
  return (
    <FooterContainer>
      <MenuList>
        <ListItem>
          <FaRegNewspaper />
          <p>news</p>
        </ListItem>
        <ListItem>
          <FaPagelines />
          <p>projekte</p>
        </ListItem>
        <ListItem>
          <FaCalendarAlt />
          <p>kalender</p>
        </ListItem>
        <ListItem>
          <FaUserAlt />
          <p>profil</p>
        </ListItem>
      </MenuList>
    </FooterContainer>
  )
}

export default Foter

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 3.5rem;
  position: fixed;
  bottom: 0;
  background: #fff;
  box-shadow: 1px 0px 5px 3px rgba(0, 0, 0, 0.2); ;
`

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  border: 1px solid white;
  padding: 0;
`

const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  margin: 0 auto;
  cursor: pointer;

  p {
    font-size: 0.7rem;
    margin: 0.3rem;
    padding: 0;
    line-height: 0.7rem;
    text-transform: uppercase;
  }

  &:active {
    color: grey;
  }
`
