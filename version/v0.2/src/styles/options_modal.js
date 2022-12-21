import styled from "styled-components";

export const ModalComponent = styled.div`
  width: 100vw;
  height: 100vw;
  overflow: auto;
  position: fixed;
  background-color: transparent;
  display: grid;
  place-items: center;
`;
export const ModalComponentBox = styled.div`
  background-color: var(--bg-modal);
  max-width: 500px;
  width: 100%;
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
`;
export const ModalBoxButtonBox = styled.div``;
export const ModalBoxButton = styled.button``;
export const ModalBoxButtonSecond = styled.button``;
export const ModalBoxInput = styled.input``;
