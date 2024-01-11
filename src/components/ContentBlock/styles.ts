import styled from 'styled-components';

export const RightBlockContainer = styled('section')`
  position: relative;
  padding: 2rem 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0 1rem;
  }
`;
export const StandardBlockContainer = styled('section')`
  position: relative;
  padding: 2rem 0 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0 1rem;
  }
`;

export const UnorderList = styled('ul')`
  color: rgb(24, 33, 109);
  font-size: 21px;
`;
export const ListIten = styled('li')`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled('div')`
  position: relative;
  max-width: 750px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

