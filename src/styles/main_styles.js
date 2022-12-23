import styled from "styled-components";

export const MainComponentStyles = styled.div`
  width: 100vw;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

/* Write test */
export const MainSectionContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  place-items: center;
  display: grid;
  @media (min-width: 1340px) {
    grid-template-columns: repeat(3, 450px);
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 480px);
  }
  @media (min-width: 1500px) {
    grid-template-columns: repeat(3, 500px);
  }
`;
export const VoidDiv = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  @media (min-width: 1340px) {
    display: block;
  }
`;
export const MainSectionWordWrite = styled.div`
  width: 100%;
  display: grid;
  place-content: center;
`;

export const MainSectionWordWriteCenter = styled.div`
  position: relative;
  overflow: hidden;
`;

export const MainSectionWord = styled.span`
  font-size: 3.5rem;
  color: var(--color-icon);
  font-family: var(--family-mono);
  font-weight: 600;
  letter-spacing: -0.05em;
  @media (min-width: 1500px) {
    font-size: 4rem;
  }
`;

export const MainSectinWordInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 3.5rem;
  font-weight: 600;
  color: var(--color-good);
  font-family: var(--family-mono);
  position: absolute;
  height: 100%;
  left: 0;
  width: 100%;
  letter-spacing: -0.05em;
  @media (min-width: 1500px) {
    font-size: 4rem;
  }
`;
export const MainSectionWordSecondBox = styled.div`
  display: none;
  grid-template-columns: auto auto;
  gap: 2rem;
  width: 100%;
  @media (min-width: 1340px) {
    display: grid;
  }
`;
export const MainSectionWordSecond = styled.span`
  font-size: 1.5rem;
  font-family: var(--family-mono);
  color: var(--color-icon);
  font-weight: 600;
  letter-spacing: -0.05em;
  @media (min-width: 1500px) {
    font-size: 2rem;
  }
`;
