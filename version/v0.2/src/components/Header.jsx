import React from 'react'
import logo from "../assets/logo.svg"
import { HeaderComponent, HeaderComponentCenter, HeComLogo, HeComtimer } from '../styles/header_styles'

export default function Header() {
  return (
   <HeaderComponent role="heading ">
    <HeaderComponentCenter>
      <HeComLogo src={logo}/>
      <HeComtimer>1:20</HeComtimer>
    </HeaderComponentCenter>
   </HeaderComponent>
  )
}
