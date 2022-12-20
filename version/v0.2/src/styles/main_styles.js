import styled from "styled-components";

export const MainComponentStyles = styled.div`
  width: 100vw;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const MainSectionContainer = styled.div`
  position: relative;
  max-width: 1400px;
`;
export const MainSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`;
export const MainSectionWord = styled.span`
  font-size: 4rem;
  color: var(--color-icon);
  font-family: var(--family-mono);
`;
export const MainSectionWordSecondBox = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
export const MainSectionWordSecond = styled.span`
  font-size: 3rem;
  font-family: var(--family-mono);
  color: var(--color-icon);
`;
