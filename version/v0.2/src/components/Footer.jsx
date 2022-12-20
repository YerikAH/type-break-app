import React from "react";
import options from "../assets/settings.svg";
import optionsExit from "../assets/settings_exit.svg";
import {
  FooterComponent,
  FooterComponentCenter,
  FooterComponentCenterSetting,
  FooterComponentCenterSettingImage,
} from "../styles/footer_styles";

export default function Footer() {
  return (
    <FooterComponent role="footer">
      <FooterComponentCenter>
        <FooterComponentCenterSetting aria-label="open modal">
          <FooterComponentCenterSettingImage src={options} />
        </FooterComponentCenterSetting>
      </FooterComponentCenter>
    </FooterComponent>
  );
}
