import React from 'react'
import { MainNavWrap, NavBar, Left, Right, Login, Menu } from './MainNavbarCss'
import { FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom';
const MainNavbar = () => {
  return (
    <MainNavWrap>
      <NavBar>
          <Left>
            <span>CPNC</span>
          </Left>

          <Right>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adminssion">Admission</Link></li>
          <li><Link to="/academic">Academic</Link></li>
          <li><a href="https://vnbc-gnec.kari.opalsinfo.net/bin/home ">Link</a></li>
          <li><Link to="/registrar">Registrar</Link></li>
        </ul>
            <Login>LOGIN</Login>
            <Menu><FaBars/></Menu>
          </Right>

      </NavBar>
    </MainNavWrap>
    
  )
}

export default MainNavbar