import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Image } from "../../../common/Image";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import { LeftContentSection, ContentWrapper } from "./styles";

const LeftContentBlock = ({
  title,
  content,
  icon,
  t,
  id,
  cite,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      <Fade triggerOnce direction="left">
        <Row justify="space-evenly" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <Image src={icon} width="100%" height="100%" />
            {cite && <cite>{cite}</cite>}
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h3>{t(title)}</h3>
              {content}
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
