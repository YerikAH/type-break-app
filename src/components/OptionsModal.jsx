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
} from "../styles/options_modal";
import {
  EIGHT_LETTER,
  FIVE_LETTER,
  FOUR_LETTER,
  NINE_LETTER,
  SEVEN_LETTER,
  SIX_LETTER,
  TEN_LETTER,
  THREE_LETTER,
} from "../variables/variables";
import Loader from "./Loader";
import ReactDOM from "react-dom";
import { useState } from "react";
const modalHtml = document.getElementById("modal");
export default function OptionsModal({
  setChangeLetters,
  setTimer,
  setTimerUi,
  viewLoader,
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
          <ModalBoxButton
            className="'3'"
            value={THREE_LETTER}
            onClick={handleClickChange}
          ></ModalBoxButton>
          <ModalBoxButton
            className="'4'"
            value={FOUR_LETTER}
            onClick={handleClickChange}
          ></ModalBoxButton>
          <ModalBoxButton
            className="'5'"
            value={FIVE_LETTER}
            onClick={handleClickChange}
          ></ModalBoxButton>
          <ModalBoxButton
            className="'6'"
            value={SIX_LETTER}
            onClick={handleClickChange}
          ></ModalBoxButton>
          <ModalBoxButton
            className="'7'"
            value={SEVEN_LETTER}
            onClick={handleClickChange}
          ></ModalBoxButton>
          <ModalBoxButton
            className="'8'"
            value={EIGHT_LETTER}
            onClick={handleClickChange}
          ></ModalBoxButton>
          <ModalBoxButton
            className="'9'"
            value={NINE_LETTER}
            onClick={handleClickChange}
          ></ModalBoxButton>
          <ModalBoxButton
            className="'10'"
            value={TEN_LETTER}
            onClick={handleClickChange}
          ></ModalBoxButton>
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
        {viewLoader && <Loader></Loader>}
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
