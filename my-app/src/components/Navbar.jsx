import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContent = styled.div`
  background-color: #d5f1f5;
  width: 200px;
  height: 100vh;
`

const NavTitle = styled.div`
  font-weigth: bolder;
  font-size: 1.5rem;
  margin: 10px 15px;
  display: flex;
`

const NavRoutes = styled.div`
  margin: 10px 15px;
  text-decoratoin: none;
  color: black;
`

const NavItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`



export const Navbar = ({ routes }) => {
  return (
    <NavContent>
      <NavTitle>
        UI-KIT
      </NavTitle>
      <NavRoutes>
        {
          routes.map((item, index) => {
            return <Link to={item.route} key={index}>
              <NavItem>{item.title}</NavItem>
            </Link>
          })
        }
      </NavRoutes>
    </NavContent>
  )
}