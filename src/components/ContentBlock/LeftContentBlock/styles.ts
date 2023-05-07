import styled from "styled-components";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 2rem 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0 1rem;
  }
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 840px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;
