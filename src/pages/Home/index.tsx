import { lazy } from 'react';
import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import AboutContent from '../../content/AboutContent.json';
import MissionContent from '../../content/MissionContent.json';
import ProductContent from '../../content/ProductContent.json';
import DateContent from '../../content/DateContent.json';
import InfoBanner from '../../components/InfoBanner';
import IntroBlockContent from '../../content/IntroBlockContent';
import RegisterBlockContent from '../../content/RegisterBlockContent';
import DatesBlockContent from '../../content/DatesBlockContent';
import AboutBlockContent from '../../content/AboutBlockContent';
import CostsBlockContent from '../../content/CostsBlockContent';
import BravasBlockContent from '../../content/BravasBlockContent';
import ContactUsBlockContent from '../../content/ContactUsBlockContent';

const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));

console.log(
  '%cBRAVAS HOST THE BEST TOURNAMENT IN CASTELLDEFELS!',
  'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%',
);

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <InfoBanner />
      <ContentBlock
        type="left"
        title={IntroContent.title}
        content={IntroBlockContent()}
        icon="girlWithBeer.jpg"
        id="intro"
        cite="Photo by: Bettina Koerner"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="right"
        title={ProductContent.title}
        content={RegisterBlockContent()}
        icon="manDrinkingPorro.jpg"
        id="register"
        cite="Photo by: Bettina Koerner"
        button={[
          {
            title: 'Register',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLSdneZnVzUndli87Kz27hAYJyAJL6MIU2eeWUHWw-wSQGFM6-Q/viewform?usp=sf_link',
          },
        ]}
      />
      <ContentBlock
        type="left"
        title={DateContent.title}
        content={DatesBlockContent()}
        icon="childPainting.jpg"
        id="dates"
        cite="Photo by: Bettina Koerner"
      />

      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={CostsBlockContent()}
        icon="womanDivingForFirsbee.jpg"
        id="cost"
        cite="Photo by: Tuukka Koistinen"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutBlockContent()}
        icon="porroSidelineCrowed.jpg"
        id="about"
        cite="Photo by: Tuukka Koistinen"
      />
      <ContentBlock
        type="right"
        title={'Contact Us'}
        content={ContactUsBlockContent()}
        icon="manInSand.jpg"
        id="contact"
        cite="Photo by: Tuukka Koistinen"
      />
      <ContentBlock
        type="left"
        title={'Bravas'}
        content={BravasBlockContent()}
        icon="fieldsAtSunset.jpg"
        id="about"
        cite="Photo by: Bettina Koerner"
      />
    </Container>
  );
};

export default Home;

