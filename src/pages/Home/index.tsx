import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

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

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <h1>
        The Porró Open 2023 Ultimate Frisbee Mixed Beach hat tournament October
        28th-30th - Saturday- Monday
      </h1>
      <h2>We are working on our website!!</h2>
      <p>
        If you want to stay up to date with the Porró sign up to our{" "}
        <a href="https://espadisc.us18.list-manage.com/subscribe?u=439ccd3e80bf75e3d5261460b&id=f5913439d3">
          mailinglist
        </a>
      </p>
      <p>
        Do trust any of the content that you see here, it is a work in progress
      </p>

      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.content}
        text={IntroContent.text}
        subtext={IntroContent.subtext}
        // button={IntroContent.button}
        icon="fieldsAtSunset.jpg"
        id="intro"
      />*/}
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        buttonOnClick={openMailingList()}
      />
      {/*<ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="childPainting.jpg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="GandTBar.jpg"
        id="about"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> 
       <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="manDrinkingPorro.jpg"
        id="mission"
    /> */}
    </Container>
  );
};

export default Home;
