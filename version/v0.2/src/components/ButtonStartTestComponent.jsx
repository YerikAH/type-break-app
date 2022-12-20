import React from "react";
import startIcon from "../assets/go_icon.svg";
import {
  MainComponentButton,
  MainButtonStartTest,
  MainButtonStartTestIcon,
} from "../styles/button_start_styles.js";
export default function ButtonStartTestComponent() {
  return (
    <MainComponentButton>
      <MainButtonStartTest>
        <MainButtonStartTestIcon src={startIcon} />
        start test
      </MainButtonStartTest>
    </MainComponentButton>
  );
}
