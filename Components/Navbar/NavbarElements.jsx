import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 767px) {
    transition: 0.8s all ease;
    width: 100%;
  }
  @media screen and (max-width: 575px) {
    transition: 0.8s all ease;
    width: 100%;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;
export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    align-items: center;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  color: #fff;
  height: 80px;
`;
export const NavLinks = styled(LinkScroll)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
