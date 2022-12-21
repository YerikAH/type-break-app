import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
  function calcWpm(badWord, goodWord, time) {
    let wordTotal = goodWord - badWord;

    const result = parseFloat(wordTotal / (time / 60)).toFixed(2);

    if (result < 0) {
      return 0;
    } else {
      return result;
    }
  }
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
