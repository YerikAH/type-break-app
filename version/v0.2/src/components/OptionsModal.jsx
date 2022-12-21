import React from "react";
import {
  ModalBoxButton,
  ModalBoxButtonBox,
  ModalBoxButtonSecond,
  ModalBoxInput,
  ModalBoxText,
  ModalBoxTitle,
  ModalComponent,
  ModalComponentBox,
  ErrorModal,
  ModalBoxButtonText,
} from "../styles/options_modal";
import ReactDOM from "react-dom";
import { useState } from "react";
const modalHtml = document.getElementById("modal");
export default function OptionsModal({
  setChangeLetters,
  setTimer,
  setTimerUi,
}) {
  const [timeCustomInput, setTimeCustomInput] = useState("");
  const [timeCustomInputError, setTimeCustomInputError] = useState(false);
  const handleClickChange = (e) => {
    setChangeLetters(e.target.value);
  };
  const handleTimer = (e) => {
    const stringToNumber = parseInt(e.target.value);
    setTimer(stringToNumber);
    setTimerUi(stringToNumber);
    setTimeCustomInputError(false);
  };

  const handleChangeVerifyTimer = (e) => {
    const inputValueTimer = e.target.value;
    setTimeCustomInput(inputValueTimer);

    const INTEGER_REGEX = /^[1-9][0-9]*$/;
    if (!INTEGER_REGEX.test(inputValueTimer)) {
      setTimeCustomInputError(true);
      setTimer(30);
      setTimerUi(30);
    } else {
      setTimeCustomInputError(false);
      const stringToNumber = parseInt(e.target.value);
      setTimer(stringToNumber);
      setTimerUi(stringToNumber);
    }
  };

  return ReactDOM.createPortal(
    <ModalComponent>
      <ModalComponentBox>
        <ModalBoxTitle>words per letter</ModalBoxTitle>
        <ModalBoxText>
          (If you press button 3 the test will only be for words that have 3
          letters.)
        </ModalBoxText>
        <ModalBoxButtonBox>
          <ModalBoxButton value="wordThreeLetters" onClick={handleClickChange}>
            <ModalBoxButtonText>3</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton value="wordFourLetters" onClick={handleClickChange}>
            <ModalBoxButtonText>4</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton value="wordFiveLetters" onClick={handleClickChange}>
            <ModalBoxButtonText>5</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton value="wordSixLetters" onClick={handleClickChange}>
            <ModalBoxButtonText>6</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton value="wordSevenLetters" onClick={handleClickChange}>
            <ModalBoxButtonText>7</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton value="wordEightLetters" onClick={handleClickChange}>
            <ModalBoxButtonText>8</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton value="wordNineLetters" onClick={handleClickChange}>
            <ModalBoxButtonText>9</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton value="wordTenLetters" onClick={handleClickChange}>
            <ModalBoxButtonText>10</ModalBoxButtonText>
          </ModalBoxButton>
        </ModalBoxButtonBox>
        <ModalBoxTitle>test time</ModalBoxTitle>
        <ModalBoxText>
          (If you press the 30 button, the test will last 30 seconds.)
        </ModalBoxText>
        <ModalBoxButtonBox className="box_other_styles">
          <ModalBoxButtonSecond value="15" onClick={handleTimer}>
            15s
          </ModalBoxButtonSecond>
          <ModalBoxButtonSecond value="30" onClick={handleTimer}>
            30s
          </ModalBoxButtonSecond>
          <ModalBoxButtonSecond value="60" onClick={handleTimer}>
            60s
          </ModalBoxButtonSecond>
          <ModalBoxButtonSecond value="120" onClick={handleTimer}>
            120s
          </ModalBoxButtonSecond>
          <ModalBoxInput
            value={timeCustomInput}
            onChange={handleChangeVerifyTimer}
          />
        </ModalBoxButtonBox>
        {timeCustomInputError && (
          <ErrorModal>
            There is an error in the input, the default value of 30 seconds.
          </ErrorModal>
        )}
      </ModalComponentBox>
    </ModalComponent>,
    modalHtml
  );
}
