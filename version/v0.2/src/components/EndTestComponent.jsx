import React from "react";
import {
  EndTestBox,
  EndTestBoxResultText,
  EndTestBoxText,
  MainComponentEndTest,
} from "../styles/end_test_styles";

export default function EndTestComponent() {
  return (
    <MainComponentEndTest>
      <EndTestBox>
        <EndTestBoxText>wpm</EndTestBoxText>
        <EndTestBoxResultText>85.00</EndTestBoxResultText>
      </EndTestBox>
      <EndTestBox>
        <EndTestBoxText>word</EndTestBoxText>
        <EndTestBoxResultText>40/2</EndTestBoxResultText>
      </EndTestBox>
      <EndTestBox>
        <EndTestBoxText>time</EndTestBoxText>
        <EndTestBoxResultText>15</EndTestBoxResultText>
      </EndTestBox>
    </MainComponentEndTest>
  );
}
