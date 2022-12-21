import React from "react";
import { useState } from "react";
import startIcon from "../assets/go_icon.svg";
import {
  MainComponentButton,
  MainButtonStartTest,
  MainButtonStartTestIcon,
} from "../styles/button_start_styles.js";
export default function ButtonStartTestComponent({
  setStartTest,
  timerUi,
  setTimerUi,
  timer,
  setTestEnd,
}) {
  // startTest
  // timerUi
  // testEnd
  // TimerUi

  const handleStartTimer = () => {
    let intervalTimer;
    let count = 0;
    let countLess = timerUi;
    setStartTest(true);
    intervalTimer = setInterval(() => {
      count++;
      countLess--;
      setTimerUi(countLess);
      if (count == timer) {
        clearInterval(intervalTimer);
        setTestEnd(false);
        setTimerUi(timer);

        console.log("Bye interval");
      }
    }, 1000);
  };

  return (
    <MainComponentButton>
      <MainButtonStartTest onClick={handleStartTimer}>
        <MainButtonStartTestIcon src={startIcon} />
        start test
      </MainButtonStartTest>
    </MainComponentButton>
  );
}
