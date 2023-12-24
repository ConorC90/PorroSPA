import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

export const HeaderSection = styled('header')`
  padding: 0.5rem 0.5rem;
  position: fixed;
  width: 100%;
  max-width: 100vw;
  z-index: 2;
  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
  background-color: #880201;
  @media only screen and (max-width: 1024px) {
    padding: 0.5rem 2rem;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled('div')`
  display: inline-block;
  text-align: center;
  font-weight: 700;
`;

export const CustomNavLink = styled('div')`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled('div')<any>`
  cursor: pointer;
  width: ${p => (p.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled('div')`
  svg {
    fill: white;
  }
`;

export const Mobile = styled('div')`
  @media only screen and (max-width: 420px) {
    display: none;
  }
`;
export const Tablet = styled('div')`
  @media only screen and (max-width: 420px) {
    display: none;
  }
`;
export const Desktop = styled('div')`
  @media only screen and (max-width: 420px) {
    display: none;
  }
`;
export const StickyDiv = styled('div')`
  // position: fixed;
  // top: 0px;
  z-index: 1;
  width: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const Menu = styled('h5')`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: white;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 1025px) {
    margin: 1.25rem 2rem;
    color: rgb(46, 24, 106);
  }
`;

export const Label = styled('span')`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Close = styled(CloseOutlined)<any>`
  font-size: 22px;
  color: rgb(46, 24, 106);
`;
export const BurgerIcon = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled('span')`
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    font-weight: 1000;
    text-underline-position: under;
    text-decoration: rgb(46, 24, 106) underline overline;
    text-decoration-thickness: 3px;
    color: rgb(46, 24, 106);
  }
`;
export const BannerText = styled('h2')`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0px;
  margin-right: 100px;
  color: white;
  mar
`;
export const MobileBannerText = styled('h2')`
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 0px;
`;

export const BurgerWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

