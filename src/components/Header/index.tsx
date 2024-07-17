import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  BurgerIcon,
  BurgerWrapper,
  Menu,
  CustomNavLinkSmall,
  Label,
  Close,
  Span,
} from "./styles";
import { Tablet, Desktop } from "../../common/utils/viewPorts";
import MovingBanner from "../Banner";

const Header = ({ t }: any) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(!open);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setOpen(false);
    };

    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("register")}>
          <Span>{t("Register")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("dates")}>
          <Span>{t("Important Dates")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("cost")}>
          <Span>{t("Cost")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
          <Span>{t("Contact")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => window.open("https://forms.gle/phwj8Cfxc9bLKesR8")}
        >
          <Span>
            <Button>{t("Register")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  const containerStyle: React.CSSProperties = {
    color: "red",
  };
  return (
    <HeaderSection>
      <div>
        <Desktop>
          <Row justify="space-around">
            <LogoContainer to="/" aria-label="homepage">
              <SvgIcon src="porroLogoPlain.jpg" width="90px" height="85px" />
            </LogoContainer>
            <Row justify="space-between">
              <MenuItem />
            </Row>
          </Row>
        </Desktop>
        <Tablet>
          <Row justify="space-between">
            <div>
              <LogoContainer to="/" aria-label="homepage">
                <SvgIcon src="porroLogoPlain.jpg" width="55px" height="50px" />
              </LogoContainer>
            </div>
            <BurgerWrapper onClick={showDrawer}>
              <Burger onClick={showDrawer}>
                <BurgerIcon />
              </Burger>
            </BurgerWrapper>
          </Row>
          <Row justify="center"></Row>
        </Tablet>
        <Drawer
          style={containerStyle}
          closable={false}
          open={open}
          onClose={onClose}
        >
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Close style={{ color: "rgb(46, 24, 106)" }} />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </div>
      <MovingBanner />
    </HeaderSection>
  );
};

export default withTranslation()(Header);
