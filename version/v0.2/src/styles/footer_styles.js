import styled from "styled-components";

export const FooterComponent = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
export const FooterComponentCenter = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterComponentCenterSetting = styled.button`
  background: transparent;
  border-radius: 100rem;
  outline: none;
  border: none;
  z-index: 500;
  position: relative;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background-color: var(--bg-modal);
  }
`;
export const FooterComponentCenterSettingImage = styled.img``;
export const ButtonComeBack = styled.button`
  background: transparent;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 100rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    background-color: var(--bg-modal);
  }
`;
