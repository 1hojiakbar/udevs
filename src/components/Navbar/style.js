import { Link } from "react-scroll";
import styled, { css, keyframes } from "styled-components";

const flex = css`
  display: flex;
`;

const showLine = keyframes`
from{
  opacity: 0;
}

to{
  opacity: 1;
}
`;

// main container
const Container = styled.div`
  height: max-content;
`;

// Outlet wrapper
const Wrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
`;

const NavbarWrapper = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
  padding: 0 60px;
  width: 100%;
  height: 72px;
  box-shadow: 0 1px 0 #e5e9f2;
  background-color: #fff;
  @media (max-width: 1120px) {
    padding: 0 40px;
  }
`;

const Logo = styled.img`
  width: 96px;
  height: 40px;
  cursor: pointer;
`;

Logo.Title = styled.h1`
  color: var(--whiteColor);
  font-family: var(--font);
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 3.2%;
  text-align: left;
  .title {
    color: var(--purple);
    font-weight: 700;
    font-size: 18px;
  }
`;

const Section = styled.div`
  ${flex}
  align-items: center;
  gap: ${({ gap }) => gap && gap};
  @media (max-width: 1020px) {
    display: ${({ nav }) => nav === "true" && "none"};
  }
`;

export const ThirdSection = styled.div`
  display: ${({ none }) => none === "true" && "none"};
  @media (max-width: 1020px) {
    display: ${({ nav }) => nav === "true" && "none"};
    display: block;
  }
`;

export const MenuIcon = styled.img`
  width: 40px;
  height: 33px;
  cursor: pointer;
  display: none;
  @media (max-width: 1020px) {
    display: block;
  }
`;

export const CloseIcon = styled.img`
  width: 40px;
  height: 33px;
  cursor: pointer;
`;

export const DrawerContentWrapper = styled.div`
  ${flex}
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin: 40px 0;
`;

export const DrawerContentLink = styled(Link)`
  font-size: 30px;
  font-weight: 800;
  line-height: 40px;
  color: var(--black);
  margin: 0 auto;
  font-family: var(--font);
  &:hover {
    color: var(--black);
  }
`;

const NavLinkItem = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  line-height: 20px;
  color: var(--dark);
  cursor: pointer;
  padding-top: 7px;
  &:hover {
    &::after {
      opacity: 1;
      animation: ${showLine} linear 200ms;
    }
  }
  &::after {
    content: "";
    display: block;
    border-top: 2.5px solid var(--primary);
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
    transform: rotate(180deg);
    padding-left: 0.9px;
    padding-top: 7px;
    width: 100%;
    opacity: 0;
  }
`;

export { Container, Wrapper, NavbarWrapper, Logo, Section, NavLinkItem };
