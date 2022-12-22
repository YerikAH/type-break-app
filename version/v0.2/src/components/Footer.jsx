import React from "react";
import options from "../assets/settings.svg";
import optionsExit from "../assets/settings_exit.svg";
import backIcon from "../assets/back_icon.svg";
import {
  FooterComponent,
  FooterComponentCenter,
  FooterComponentCenterSetting,
  ButtonComeBack,
  FooterComponentCenterSettingImage,
} from "../styles/footer_styles";

export default function Footer({
  setModal,
  modal,
  startTest,
  testEnd,
  setTestEnd,
  setStartTest,
  viewLoader,
}) {
  const handleClick = () => {
    setModal(!modal);
  };
  const handleBackClick = () => {
    setTestEnd(true);
    setStartTest(false);
  };
  return (
    <FooterComponent role="footer">
      <FooterComponentCenter>
        {!startTest && (
          <>
            {viewLoader ? (
              <>
                <FooterComponentCenterSetting aria-label="errors">
                  {modal ? (
                    <FooterComponentCenterSettingImage src={optionsExit} />
                  ) : (
                    <FooterComponentCenterSettingImage src={options} />
                  )}
                </FooterComponentCenterSetting>
              </>
            ) : (
              <>
                <FooterComponentCenterSetting
                  aria-label="open modal and close modal"
                  onClick={handleClick}
                >
                  {modal ? (
                    <FooterComponentCenterSettingImage src={optionsExit} />
                  ) : (
                    <FooterComponentCenterSettingImage src={options} />
                  )}
                </FooterComponentCenterSetting>
              </>
            )}
          </>
        )}
        {!testEnd ? (
          <ButtonComeBack onClick={handleBackClick}>
            <FooterComponentCenterSettingImage src={backIcon} />
          </ButtonComeBack>
        ) : (
          <></>
        )}
      </FooterComponentCenter>
    </FooterComponent>
  );
}
