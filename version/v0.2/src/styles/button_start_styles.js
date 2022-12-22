import styled from "styled-components";

export const MainComponentButton = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MainButtonStartTest = styled.button`
  background: var(--bg-modal);
  font-size: 1rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 700;
  border: none;
  letter-spacing: -0.05em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text);
  transition: 0.3s;
  &:hover {
    background: var(--color-input);
  }
`;
export const MainButtonStartTestIcon = styled.img`
  margin-right: 0.3rem;
`;
