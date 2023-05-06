import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
// import i18n from "i18next";
import { FooterSection, Extra, Para, Language } from "./styles";
import styled from "styled-components";

interface SocialLinkProps {
  href: string;
  src: string;
}

export const FooterContainer = styled("div")<any>`
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 10px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
  @media only screen and (min-width: 1024px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media only screen and (max-width: 1025px) {
    max-width: calc(100% - 38px);
    padding: 5px 18px;
  }

  @media only screen and (max-width: 500px) {
    max-width: 100%;
    padding: 5px 18px;
  }
`;

const Footer = ({ t }: any) => {
  // const handleChange = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <FooterContainer>
          <Row justify="center" align="top">
            <Col lg={12} md={12} sm={24} xs={24}>
              <Col lg={12} md={12} sm={24} xs={24}>
                <Row justify="center" align="top">
                  <a
                    href="https://beachultimate.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SvgIcon src={"BULA.png"} width="319px" height="146px" />
                  </a>
                </Row>
              </Col>
              <Col lg={12} md={12} sm={24} xs={24}>
                <Language>{t("Address")}</Language>
                <Para>Pg. Marítim, 322,</Para>
                <Para>Castelldefels,</Para>
                <Para>Barcelona.</Para>
              </Col>
            </Col>

            <Col lg={12} md={12} sm={24} xs={24}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.76342701706!2d1.956461700526835!3d41.26485987522879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a483f52d288c73%3A0x82caefeae25644bb!2sPlatja%20de%20Castelldefels!5e0!3m2!1sen!2ses!4v1679508744718!5m2!1sen!2ses"
                width="100%"
                height="300px"
                loading="lazy"
                title="TournamentLocation"
              ></iframe>

              {/* <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer> */}
            </Col>
          </Row>
          <Row align="bottom">
            <Para>
              <a
                href="https://www.freeprivacypolicy.com/live/06572ab6-89aa-49c5-9780-4375484aec14"
                target="_blank"
                rel="noreferrer"
              >
                <u>Privacy Policy</u>
              </a>
            </Para>
          </Row>
        </FooterContainer>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-evenly"
            align="middle"
            style={{ padding: "1rem" }}
          >
            <SocialLink
              href="https://www.instagram.com/bravasultimate/"
              src="instagram.svg"
            />
            <SocialLink
              href="https://www.facebook.com/people/Porr%C3%B3-Open/100064767934714/"
              src="facebook.png"
            />
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
