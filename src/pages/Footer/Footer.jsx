import React from "react";
import logo from "../../assets/icons/logo.svg";
import {
  BottomContentWrapper,
  Container,
  FooterBottomContent,
  FooterDivider,
  FooterLinksItem,
  FooterLinksItemTitle,
  FooterLinkWrapper,
  FooterLogo,
  FooterPageLink,
  SocialIcon,
  SocialIconWrapper,
} from "./style";
import {
  footerAboutData,
  footerPortifolioData,
  footerServicesData,
} from "../../utils/footer";
import socialMediaData from "../../utils/socialMedia";

const Footer = () => {
  return (
    <Container>
      <FooterLogo src={logo} />
      <FooterLinkWrapper>
        <FooterLinksItem>
          <FooterLinksItemTitle>About us</FooterLinksItemTitle>
          {footerAboutData.map((value) => {
            return (
              <FooterPageLink key={value.id} to={value.path}>
                {value.title}
              </FooterPageLink>
            );
          })}
        </FooterLinksItem>
        <FooterLinksItem>
          <FooterLinksItemTitle>Services</FooterLinksItemTitle>
          {footerServicesData.map((value) => {
            return (
              <FooterPageLink key={value.id} to={value.path}>
                {value.title}
              </FooterPageLink>
            );
          })}
        </FooterLinksItem>
        <FooterLinksItem>
          <FooterLinksItemTitle>Portfolio</FooterLinksItemTitle>
          {footerPortifolioData.map((value) => {
            return (
              <FooterPageLink key={value.id} to={value.path}>
                {value.title}
              </FooterPageLink>
            );
          })}
        </FooterLinksItem>
      </FooterLinkWrapper>
      <FooterDivider />
      <FooterBottomContent>
        <BottomContentWrapper>
          <BottomContentWrapper>
            &#xa9; <p>Udevs. All rights reserved</p>
          </BottomContentWrapper>
        </BottomContentWrapper>
        <BottomContentWrapper>
          {socialMediaData.map((item) => {
            return (
              <SocialIconWrapper key={item.id}>
                <SocialIcon src={item.icon} />
              </SocialIconWrapper>
            );
          })}
        </BottomContentWrapper>
      </FooterBottomContent>
    </Container>
  );
};

export default Footer;
