import styled from "styled-components";

export const StyledContainer = styled("div")<any>`
  position: relative;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 10px;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};
  // @media only screen and (max-width: 1024px) {
  //   max-width: calc(100% - 68px);
  //   padding: 0 30px;
  // }

  @media only screen and (max-width: 1025px) {
    max-width: calc(100% - 38px);
    padding: 5px 18px;
  }

  @media only screen and (max-width: 500px) {
    max-width: 100%;
    padding: 5px 18px;
  }

  @media only screen and (max-width: 340px) {
    max-width: 100%;
    padding: 95px 18px;
  }
`;
