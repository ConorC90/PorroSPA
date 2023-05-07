import { ContentWrapper } from "./styles";
import { Fade } from "react-awesome-reveal";
export default function index() {
  return (
    <Fade big={true}>
      <ContentWrapper>
        <h1 id="h1Header">The Porró Open 2023</h1>
        <h2>October 28th-30th</h2>
        <p>Proudly presented by Bravas Ultimate Frisbee Club since 1998.</p>
        <hr></hr>
      </ContentWrapper>
    </Fade>
  );
}
