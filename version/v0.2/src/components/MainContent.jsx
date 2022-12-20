import React from "react";
import {
  MainComponentStyles,
  MainSection,
  MainSectionContainer,
  MainSectionWord,
  MainSectionWordSecond,
  MainSectionWordSecondBox,
} from "../styles/main_styles";

export default function MainContent() {
  return (
    <MainComponentStyles role="main">
      <MainSectionContainer>
        <MainSection>
          <MainSectionWord>caramba</MainSectionWord>
        </MainSection>
        <MainSectionWordSecondBox>
          <MainSectionWordSecond>juzgado</MainSectionWordSecond>
          <MainSectionWordSecond>atender</MainSectionWordSecond>
        </MainSectionWordSecondBox>
      </MainSectionContainer>
    </MainComponentStyles>
  );
}
