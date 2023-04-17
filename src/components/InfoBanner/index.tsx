import { ContentWrapper } from "./styles";
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
