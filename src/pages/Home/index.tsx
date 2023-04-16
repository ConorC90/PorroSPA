import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import DateContent from "../../content/DateContent.json";
import InfoBanner from "../../components/InfoBanner";

const Contact = lazy(() => import("../../components/ContactForm"));
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

const openMailingList = () => {
  // return (window.location.href = "http://eepurl.com/h8pUib");
};
const openRestierForm = () => {
  return (window.location.href =
    "https://docs.google.com/forms/d/e/1FAIpQLSdneZnVzUndli87Kz27hAYJyAJL6MIU2eeWUHWw-wSQGFM6-Q/viewform?usp=sf_link");
};

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <InfoBanner />
      <ContentBlock
        type="left"
        title={IntroContent.title}
        paragraph1={IntroContent.paragraph1}
        paragraph2={IntroContent.paragraph2}
        paragraph3={IntroContent.paragraph3}
        icon="manDrinkingPorro.jpg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        buttonOnClick={openMailingList()}
      />
      <ContentBlock
        type="right"
        title={ProductContent.title}
        paragraph1={ProductContent.paragraph1}
        paragraph2={ProductContent.paragraph2}
        // paragraph3={ProductContent.paragraph3}
        // paragraph4={ProductContent.paragraph4}
        // paragraph5={ProductContent.paragraph5}
        // paragraph6={ProductContent.paragraph6}
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
        paragraph1={DateContent.paragraph1}
        paragraph2={DateContent.paragraph2}
        paragraph3={DateContent.paragraph3}
        paragraph4={DateContent.paragraph4}
        paragraph5={DateContent.paragraph5}
        paragraph6={DateContent.paragraph6}
        icon="childPainting.jpg"
        id="dates"
      />

      <ContentBlock
        type="right"
        title={MissionContent.title}
        paragraph1={MissionContent.paragraph1}
        paragraph2={MissionContent.paragraph2}
        paragraph3={MissionContent.paragraph3}
        paragraph4={MissionContent.paragraph4}
        paragraph5={MissionContent.paragraph5}
        icon="fieldsAtSunset.jpg"
        id="cost"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        paragraph1={AboutContent.paragraph1}
        icon="GandTBar.jpg"
        id="about"
      />
    </Container>
  );
};

export default Home;
