import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import DateContent from "../../content/DateContent.json";
import InfoBanner from "../../components/InfoBanner";
import IntroBlockContent from "../../content/IntroBlockContent";
import RegisterBlockContent from "../../content/RegisterBlockContent";
import DatesBlockContent from "../../content/DatesBlockContent";
import AboutBlockContent from "../../content/AboutBlockContent";
import CostsBlockContent from "../../content/CostsBlockContent";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

console.log(
  "%c What are you doing here? ",
  "color: yellow; font-size: 35px; background-color: green;"
);

console.log(
  "%c You must think that you are very clever.... ",
  "color: yellow; font-size: 35px; background-color: green;"
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
        icon="manDrinkingPorro.jpg"
        id="intro"
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
        icon="girlWithBeer.jpg"
        id="register"
        button={[
          {
            title: "Register",
            href: "https://docs.google.com/forms/d/e/1FAIpQLSdneZnVzUndli87Kz27hAYJyAJL6MIU2eeWUHWw-wSQGFM6-Q/viewform?usp=sf_link",
          },
        ]}
      />
      <ContentBlock
        type="left"
        title={DateContent.title}
        content={DatesBlockContent()}
        icon="childPainting.jpg"
        id="dates"
      />

      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={CostsBlockContent()}
        icon="fieldsAtSunset.jpg"
        id="cost"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutBlockContent()}
        icon="GandTBar.jpg"
        id="about"
      />
    </Container>
  );
};

export default Home;
