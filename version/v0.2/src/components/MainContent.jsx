import React from "react";
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

export default function MainContent() {
  return (
    <MainComponentStyles role="main">
      {/* <MainSectionContainer>
        <VoidDiv></VoidDiv>
        <MainSectionWordWrite>
          <MainSectionWordWriteCenter>
            <MainSectionWord>caramba</MainSectionWord>
            <MainSectinWordInput />
          </MainSectionWordWriteCenter>
        </MainSectionWordWrite>

        <MainSectionWordSecondBox>
          <MainSectionWordSecond>juzgado</MainSectionWordSecond>
          <MainSectionWordSecond>atender</MainSectionWordSecond>
        </MainSectionWordSecondBox>
      </MainSectionContainer> */}
      <ButtonStartTestComponent></ButtonStartTestComponent>
    </MainComponentStyles>
  );
}
