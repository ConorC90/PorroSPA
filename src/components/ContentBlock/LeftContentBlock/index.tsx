import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Image } from "../../../common/Image";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const LeftContentBlock = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  paragraph6,
  button,
  icon,
  t,
  id,
  buttonOnClick,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-evenly" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Image src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h3>{t(title)}</h3>
              <Content>{paragraph1}</Content>
              <Content>{paragraph2}</Content>
              <Content>{paragraph3}</Content>
              <Content>{paragraph4}</Content>
              <Content>{paragraph5}</Content>
              <Content>{paragraph6}</Content>
              {/*               
              <Content>{t(paragraph1)}</Content>
              <Content>{t(paragraph2)}</Content>
              <Content>{t(paragraph3)}</Content>
              <Content>{t(paragraph4)}</Content>
              <Content>{t(paragraph5)}</Content>
              <Content>{t(paragraph6)}</Content> */}

              {/* <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper> */}
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
