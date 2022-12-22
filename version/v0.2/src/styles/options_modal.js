import styled from "styled-components";

export const ModalComponent = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: fixed;
  background-color: transparent;
  display: grid;
  place-items: center;
  z-index: 300;
`;
export const ModalComponentBox = styled.div`
  background-color: var(--bg-modal);
  max-width: 500px;
  width: 100%;
  padding: 2.5rem 2rem;
  border-radius: 2rem;
`;
export const ModalBoxTitle = styled.h5`
  font-size: 1rem;
  color: var(--color-text);
  font-weight: 700;
`;
export const ModalBoxText = styled.p`
  color: var(--color-text-title);
  font-size: 0.8rem;
  font-weight: 400;
  font-style: italic;
  margin-left: 2rem;
`;
export const ModalBoxButtonBox = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, 35.5px); */
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;

  grid-template-columns: ${(props) =>
    props.className === "box_other_styles"
      ? "35.5px 35.5px 35.5px 35.5px auto"
      : "repeat(auto-fill, 35.5px)"};
`;
export const ModalBoxButton = styled.button`
  border: none;
  outline: none;
  background-color: var(--color-input);
  height: 35.5px;
  padding: 0.5rem;
  border-radius: 0.5rem;
  position: relative;
  color: var(--color-text-input);
  font-weight: 800;
  &::after {
    content: ${(props) => props.className};
    position: absolute;
    left: 0.5rem;
    top: 0.3rem;
  }
  transition: 0.3s;
  &:hover {
    color: var(--color-text);
  }
  &:hover::after {
    left: 0.8rem;
    top: 0.6rem;
  }
`;
export const ModalBoxButtonText = styled.span`
  color: var(--color-text-input);
  position: absolute;
  top: 0.3rem;
  left: 0.5rem;
  height: 0;
  font-weight: 800;
`;
export const ModalBoxButtonSecond = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  color: var(--color-text-input);
  font-weight: 800;
  transition: 0.3s;
  &:hover {
    color: var(--color-text);
  }
`;
export const ModalBoxInput = styled.input`
  background-color: var(--color-input);
  border: none;
  padding: 0.5rem;
  outline: none;
  border-radius: 0.3rem;
  color: var(--color-text-input);
  max-width: 5rem;
  width: 100%;
  font-weight: 800;
`;
export const ErrorModal = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: var(--color-bad);
  font-style: italic;
`;
