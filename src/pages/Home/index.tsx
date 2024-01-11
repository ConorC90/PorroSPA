import { lazy } from 'react';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import InfoBanner from '../../components/InfoBanner';
import IntroBlockContent from '../../content/IntroBlockContent';
import RegisterBlockContent from '../../content/RegisterBlockContent';
import DatesBlockContent from '../../content/DatesBlockContent';
import AboutBlockContent from '../../content/AboutBlockContent';
import CostsBlockContent from '../../content/CostsBlockContent';
import BravasBlockContent from '../../content/BravasBlockContent';
import ContactUsBlockContent from '../../content/ContactUsBlockContent';
import { ImageNew } from '../../common/Image';

const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlockMain = lazy(() => import('../../components/ContentBlock/ContentBlockMain'));

console.log(
  '%cBRAVAS HOST THE BEST TOURNAMENT IN CASTELLDEFELS!',
  'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%',
);

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <InfoBanner />
      <ContentBlockMain
        content={IntroBlockContent()}
        id="intro"
        image={
          <ImageNew
            src={'girlWithBeer.jpg'}
            width="100%"
            height="100%"
            altText="girl With Beer at ultimate frisbee hat tournament castelldefels"
            loading="eager"
            cite="Photo by: Bettina Koerner"
          />
        }
        fadeDirection="left"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlockMain
        content={RegisterBlockContent()}
        id="register"
        image={
          <ImageNew
            src={'manDrinkingPorro.jpg'}
            width="100%"
            height="100%"
            altText="Man drinking from a Porró at ultimate frisbee hat tournament"
            loading="lazy"
            cite="Photo by: Bettina Koerner"
          />
        }
        fadeDirection="right"
      />
      <ContentBlockMain
        content={DatesBlockContent()}
        id="dates"
        image={
          <ImageNew
            src={'childPainting.jpg'}
            width="100%"
            height="100%"
            altText="Man and Child painting at ultimate frisbee hat tournament"
            loading="lazy"
            cite="Photo by: Bettina Koerner"
          />
        }
        fadeDirection="left"
      />

      <ContentBlockMain
        content={CostsBlockContent()}
        id="cost"
        image={
          <ImageNew
            src={'womanDivingForFirsbee.jpg'}
            width="100%"
            height="100%"
            altText="Woman diving for ultimate frisbee in Castelldefels beach"
            loading="lazy"
            cite="Photo by: Tuukka Koistinen"
          />
        }
        fadeDirection="right"
      />

      <ContentBlockMain
        content={AboutBlockContent()}
        id="about"
        image={
          <ImageNew
            src={'porroSidelineCrowed.jpg'}
            width="100%"
            height="100%"
            altText="Porró side line crowed in Castelldefels"
            loading="lazy"
            cite="Photo by: Tuukka Koistinen"
          />
        }
        fadeDirection="left"
      />

      <ContentBlockMain
        content={ContactUsBlockContent()}
        id="contact"
        image={
          <ImageNew
            src={'manInSand.jpg'}
            width="100%"
            height="100%"
            altText="Man in sand catching a ultimate frisbee"
            loading="lazy"
            cite="Photo by: Tuukka Koistinen"
          />
        }
        fadeDirection="right"
      />

      <ContentBlockMain
        content={BravasBlockContent()}
        id="bravas"
        image={
          <ImageNew
            src={'fieldsAtSunset.jpg'}
            width="100%"
            height="100%"
            altText="Sunset on a ultimate frisbee beach castelldefels"
            loading="lazy"
            cite="Photo by: Tuukka Koistinen"
          />
        }
        fadeDirection="left"
      />
    </Container>
  );
};

export default Home;

