import React, { useState } from "react";
import { useEffect } from "react";
import {
  MainComponentStyles,
  MainSectinWordInput,
  MainSectionContainer,
  MainSectionWord,
  MainSectionWordSecond,
  MainSectionWordSecondBox,
  MainSectionWordWrite,
  MainSectionWordWriteCenter,
  VoidDiv,
} from "../styles/main_styles";
import ButtonStartTestComponent from "./ButtonStartTestComponent.jsx";
import EndTestComponent from "./EndTestComponent";

export default function MainContent({
  word,
  setWord,
  startTest,
  testEnd,
  setStartTest,
  timerUi,
  setTimerUi,
  timer,
  setTestEnd,
}) {
  const [wordWrite, setWordWrite] = useState("");
  const [errorStyle, setErrorStyle] = useState({});
  const [corretWord, setCorretWord] = useState(0);
  const [incorretWord, setIncorretWord] = useState(0);
  const handleChange = (e) => {
    const textWrite = e.target.value;
    const wordMoreSpace = `${word[0]} `;
    setWordWrite(textWrite);
    if (textWrite.slice(-1) === " " && textWrite.length > word[0].length) {
      const deleteSpace = textWrite.slice(0, textWrite.length - 1);
      if (deleteSpace === word[0]) {
        const deleteFirstElement = word.slice(1, word.length);
        setWordWrite("");
        setWord(deleteFirstElement);
        setCorretWord(corretWord + 1);
      } else {
        console.log("Error");
        const deleteFirstElement = word.slice(1, word.length);
        setWordWrite("");
        setWord(deleteFirstElement);
        setIncorretWord(incorretWord + 1);
      }
    }

    if (
      textWrite === word[0].slice(0, textWrite.length) ||
      textWrite === wordMoreSpace
    ) {
      const colorError = {
        color: "var(--color-good)",
      };
      setErrorStyle(colorError);
    } else {
      const colorError = {
        color: "var(--color-bad)",
      };
      setErrorStyle(colorError);
    }
  };
  useEffect(() => {
    if (testEnd) {
      setCorretWord(0);
      setIncorretWord(0);
      setWordWrite("");
    }
  }, [testEnd]);

  return (
    <MainComponentStyles role="main">
      {startTest ? (
        <>
          {testEnd ? (
            <MainSectionContainer>
              <VoidDiv></VoidDiv>
              <MainSectionWordWrite>
                <MainSectionWordWriteCenter>
                  <MainSectionWord>{word[0]}</MainSectionWord>
                  <MainSectinWordInput
                    style={errorStyle}
                    value={wordWrite}
                    onChange={handleChange}
                  />
                </MainSectionWordWriteCenter>
              </MainSectionWordWrite>

              <MainSectionWordSecondBox>
                <MainSectionWordSecond>{word[1]}</MainSectionWordSecond>
                <MainSectionWordSecond>{word[2]}</MainSectionWordSecond>
              </MainSectionWordSecondBox>
            </MainSectionContainer>
          ) : (
            <EndTestComponent
              corretWord={corretWord}
              incorretWord={incorretWord}
              timer={timer}
              testEnd={testEnd}
            ></EndTestComponent>
          )}
        </>
      ) : (
        <ButtonStartTestComponent
          setStartTest={setStartTest}
          timerUi={timerUi}
          setTimerUi={setTimerUi}
          timer={timer}
          setTestEnd={setTestEnd}
        ></ButtonStartTestComponent>
      )}
    </MainComponentStyles>
  );
}
