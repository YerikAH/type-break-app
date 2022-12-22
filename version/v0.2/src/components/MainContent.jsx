import React, { useState, useEffect } from "react";
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
import { COLOR_BAD_WORD, COLOR_GOOD_WORD } from "../variables/variables";
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
  const [autofocusTrue, setAutofocusTrue] = useState(true);

  const handleChange = (e) => {
    const textWrite = e.target.value;
    const wordMoreSpace = `${word[0]} `;
    let colorError = {
      color: "var(--color-good)",
    };

    setWordWrite(textWrite);
    if (textWrite.slice(-1) === " " && textWrite.length > word[0].length) {
      const deleteSpace = textWrite.slice(0, textWrite.length - 1);
      if (deleteSpace === word[0]) {
        verifyWord();
        setCorretWord(corretWord + 1);
      } else {
        verifyWord();
        setIncorretWord(incorretWord + 1);
      }
    }

    if (
      textWrite === word[0].slice(0, textWrite.length) ||
      textWrite === wordMoreSpace
    ) {
      colorError.color = COLOR_GOOD_WORD;
      setErrorStyle(colorError);
    } else {
      colorError.color = COLOR_BAD_WORD;
      setErrorStyle(colorError);
    }
  };

  function verifyWord() {
    const deleteFirstElement = word.slice(1, word.length);
    setWordWrite("");
    setWord(deleteFirstElement);
  }

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
                    autoFocus={autofocusTrue}
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
