import React from "react";
import logo from "../assets/logo.svg";
import { convertSecondToMinute } from "../helpers/secondToMinute";
import {
  HeaderComponent,
  HeaderComponentCenter,
  HeComLogo,
  HeComtimer,
} from "../styles/header_styles";

export default function Header({ timerUi }) {
  return (
    <HeaderComponent role="heading ">
      <HeaderComponentCenter>
        <HeComLogo src={logo} />
        <HeComtimer>{convertSecondToMinute(timerUi)}</HeComtimer>
      </HeaderComponentCenter>
    </HeaderComponent>
  );
}
