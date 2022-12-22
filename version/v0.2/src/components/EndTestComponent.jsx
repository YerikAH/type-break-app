import React from "react";
import { useState, useEffect } from "react";
import { calcWpm } from "../helpers/calcWpm";
import {
  EndTestBox,
  EndTestBoxResultText,
  EndTestBoxText,
  MainComponentEndTest,
} from "../styles/end_test_styles";

export default function EndTestComponent({
  incorretWord,
  corretWord,
  timer,
  testEnd,
}) {
  const [wpmTotal, setWpmTotal] = useState("");
  useEffect(() => {
    let resultWpm = calcWpm(incorretWord, corretWord, timer);
    setWpmTotal(resultWpm);
  }, [testEnd]);
  return (
    <MainComponentEndTest>
      <EndTestBox>
        <EndTestBoxText>wpm</EndTestBoxText>
        <EndTestBoxResultText>{wpmTotal}</EndTestBoxResultText>
      </EndTestBox>
      <EndTestBox>
        <EndTestBoxText>word</EndTestBoxText>
        <EndTestBoxResultText>
          {corretWord}/{incorretWord}
        </EndTestBoxResultText>
      </EndTestBox>
      <EndTestBox>
        <EndTestBoxText>time</EndTestBoxText>
        <EndTestBoxResultText>{timer}</EndTestBoxResultText>
      </EndTestBox>
    </MainComponentEndTest>
  );
}
