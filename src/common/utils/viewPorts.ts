import styled from "styled-components";

export const Mobile = styled("div")`
  @media only screen and (min-width: 420px) {
    display: none;
  }
`;
export const Tablet = styled("div")`
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`;
export const Desktop = styled("div")`
  @media only screen and (max-width: 1025px) {
    display: none;
  }
`;
