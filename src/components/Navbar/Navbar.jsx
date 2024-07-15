import { Select } from "antd";
import navbar from "../../utils/navbar";
import Button from "../Generic/Button/Button";
import logo from "../../assets/icons/logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Logo,
  NavbarWrapper,
  NavLinkItem,
  Section,
  Wrapper,
} from "./style";
import { Link } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate("");

  return (
    <Container>
      <NavbarWrapper>
        <Section>
          <Link to="/home" smooth="true" duration={600}>
            <Logo src={logo} alt="Logo not found" />
          </Link>
        </Section>
        <Section gap="20px">
          {navbar.map((item) => {
            const { id, label, children, path, element } = item;
            if (element === "link") {
              return (
                <NavLinkItem
                  to={path || "/"}
                  key={id}
                  smooth={item.smooth}
                  duration={item.duration}
                >
                  {label}
                </NavLinkItem>
              );
            } else {
              return (
                <Select
                  key={id}
                  variant={false}
                  defaultValue={label}
                  options={children}
                  style={{
                    width: 110,
                  }}
                />
              );
            }
          })}
          <Button
            w="112px"
            h="40px"
            size="small"
            minw="80px"
            maxw="160px"
            type="primary"
          >
            <Link to="/contact" smooth="true" duration={600}>
              Contact
            </Link>
          </Button>
        </Section>
      </NavbarWrapper>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
