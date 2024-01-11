import { Row, Col } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { StandardBlockContainer, ContentWrapper } from './styles';
import { ContentBlockProps } from './types';

const StandardBlock = ({ content, image, id, cite, fadeDirection, altText }: ContentBlockProps) => {
  return (
    <StandardBlockContainer>
      <Fade triggerOnce direction={fadeDirection}>
        <Row justify="space-evenly" align="middle" id={id}>
          {fadeDirection === 'left' && (
            <Col lg={11} md={11} sm={11} xs={24}>
              {image}
            </Col>
          )}
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>{content}</ContentWrapper>
          </Col>
          {fadeDirection === 'right' && (
            <Col lg={11} md={11} sm={11} xs={24}>
              {image}
            </Col>
          )}
        </Row>
      </Fade>
    </StandardBlockContainer>
  );
};

export default StandardBlock;
