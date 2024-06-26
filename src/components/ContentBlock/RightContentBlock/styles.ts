import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 2rem 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0 1rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 750px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  // justify-content: space-between;
  max-width: 100%;
  justify-content: center;
  button:last-child {
    margin-left: 0px;
  }
  @media screen and (min-width: 624px) {
    justify-content: flex-start;
    button:last-child {
      margin-left: 20px;
    }
  }

 
`;
