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
  ModalBoxButtonText,
} from "../styles/options_modal";
import ReactDOM from "react-dom";
const modalHtml = document.getElementById("modal");
export default function OptionsModal() {
  return ReactDOM.createPortal(
    <ModalComponent>
      <ModalComponentBox>
        <ModalBoxTitle>words per letter</ModalBoxTitle>
        <ModalBoxText>
          (If you press button 3 the test will only be for words that have 3
          letters.)
        </ModalBoxText>
        <ModalBoxButtonBox>
          <ModalBoxButton>
            <ModalBoxButtonText>3</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton>
            <ModalBoxButtonText>4</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton>
            <ModalBoxButtonText>5</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton>
            <ModalBoxButtonText>6</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton>
            <ModalBoxButtonText>7</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton>
            <ModalBoxButtonText>8</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton>
            <ModalBoxButtonText>9</ModalBoxButtonText>
          </ModalBoxButton>
          <ModalBoxButton>
            <ModalBoxButtonText>10</ModalBoxButtonText>
          </ModalBoxButton>
        </ModalBoxButtonBox>
        <ModalBoxTitle>test time</ModalBoxTitle>
        <ModalBoxText>
          (If you press the 30 button, the test will last 30 seconds.)
        </ModalBoxText>
        <ModalBoxButtonBox className="box_other_styles">
          <ModalBoxButtonSecond>15s</ModalBoxButtonSecond>
          <ModalBoxButtonSecond>30s</ModalBoxButtonSecond>
          <ModalBoxButtonSecond>60s</ModalBoxButtonSecond>
          <ModalBoxButtonSecond>120s</ModalBoxButtonSecond>
          <ModalBoxInput />
        </ModalBoxButtonBox>
      </ModalComponentBox>
    </ModalComponent>,
    modalHtml
  );
}
