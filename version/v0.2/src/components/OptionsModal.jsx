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
} from "../styles/options_modal";
import { ReactDOM } from "react";
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
          <ModalBoxButton>3</ModalBoxButton>
          <ModalBoxButton>4</ModalBoxButton>
          <ModalBoxButton>5</ModalBoxButton>
          <ModalBoxButton>6</ModalBoxButton>
          <ModalBoxButton>7</ModalBoxButton>
          <ModalBoxButton>8</ModalBoxButton>
          <ModalBoxButton>9</ModalBoxButton>
          <ModalBoxButton>10</ModalBoxButton>
        </ModalBoxButtonBox>
        <ModalBoxTitle>test time</ModalBoxTitle>
        <ModalBoxText>
          (If you press the 30 button, the test will last 30 seconds.)
        </ModalBoxText>
        <ModalBoxButtonBox>
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
