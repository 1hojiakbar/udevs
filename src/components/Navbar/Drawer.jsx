import { Drawer } from "antd";
import { useContext } from "react";
import logo from "../../assets/icons/logo.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import { minContent } from "../../utils/navbar";
import ToggleContext from "../../context/NavContext";
import {
  CloseIcon,
  DrawerContentLink,
  DrawerContentWrapper,
  Logo,
} from "./style";
import {
  BottomContentWrapper,
  SocialIcon,
  SocialIconWrapper,
} from "../../pages/Footer/style";
import socialMediaData from "../../utils/socialMedia";
import LargeButton from "../Generic/Button/LargeButton";

const NavbarDrawer = () => {
  const { toggle, toggleValue } = useContext(ToggleContext);

  return (
    <>
      {toggle && (
        <Drawer
          closable={false}
          width={"100%"}
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Logo src={logo} alt="Logo not found" />
              </div>
              <div onClick={() => toggleValue(false)}>
                <CloseIcon src={closeIcon} />
              </div>
            </div>
          }
          placement="right"
          onClose={() => toggleValue(false)}
          open={toggle}
        >
          <DrawerContentWrapper>
            {minContent.map(({ id, type, path, title }) => {
              if (type === "link") {
                return (
                  <DrawerContentLink
                    key={id}
                    to={path}
                    smooth={true}
                    duration={600}
                    onClick={() => toggleValue(false)}
                  >
                    {title}
                  </DrawerContentLink>
                );
              } else {
                return (
                  <LargeButton type="nav-large" key={id}>
                    <DrawerContentLink
                      to={path}
                      smooth={true}
                      duration={600}
                      onClick={() => toggleValue(false)}
                    >
                      {title}
                    </DrawerContentLink>
                  </LargeButton>
                );
              }
            })}
          </DrawerContentWrapper>
          <DrawerContentWrapper>
            <BottomContentWrapper gap="40px">
              {socialMediaData.map((item) => {
                return (
                  <SocialIconWrapper key={item.id}>
                    <SocialIcon src={item.icon} />
                  </SocialIconWrapper>
                );
              })}
            </BottomContentWrapper>
          </DrawerContentWrapper>
        </Drawer>
      )}
    </>
  );
};

export default NavbarDrawer;
