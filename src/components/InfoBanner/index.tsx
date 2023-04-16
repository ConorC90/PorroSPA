import React from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { Image } from "../../common/Image";
import { ContentWrapper } from "./styles";
// import hello from '../../../public/img/images/'
import { Fade } from "react-awesome-reveal";
export default function index() {
  return (
    <Fade big={true}>
      <ContentWrapper>
        <h1>The Porró Open 2023</h1>
        <h2>October 28th-30th</h2>
        <hr></hr>
      </ContentWrapper>
    </Fade>
  );
}

{
  /* <Image src={"girlWithBeer.jpg"} width="100%" height="100%" />; */
}
