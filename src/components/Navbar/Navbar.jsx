import { Outlet } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import {
  Container,
  Logo,
  MenuIcon,
  NavbarWrapper,
  Section,
  ThirdSection,
  Wrapper,
} from "./style";
import { Link } from "react-scroll";
import NavbarContent from "./NavbarContent";
import ToggleContext from "../../context/NavContext";
import { useContext } from "react";
import NavbarDrawer from "./Drawer";

const Navbar = () => {
  const { toggle, toggleValue } = useContext(ToggleContext);

  return (
    <Container>
      <NavbarWrapper>
        {/* 1th section */}
        <Section>
          <Link to="/home" smooth="true" duration={600}>
            <Logo src={logo} alt="Logo not found" />
          </Link>
        </Section>
        {/*  */}

        {/* 2th section */}
        <Section gap="20px" nav="true">
          <NavbarContent />
        </Section>
        {/*  */}

        {/* 3th section */}
        <ThirdSection none="true">
          <MenuIcon src={menuIcon} onClick={() => toggleValue(true)} />
          <NavbarDrawer />
        </ThirdSection>
        {/*  */}
      </NavbarWrapper>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
