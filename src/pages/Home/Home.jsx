import Typed from "typed.js";
import { useEffect, useRef } from "react";
import logo from "../../assets/icons/logo.svg";
import Button from "../../components/Generic/Button/Button";
import homeImage from "../../assets/images/home-section.svg";
import {
  Container,
  ContentWrapper,
  HomeTitle,
  LeftContent,
  LeftImage,
  LogoImage,
  RightContent,
  SubTitle,
} from "./style";

const Home = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Development of mobile applications",
        "Development and implementation ERP systems",
        "User interface, User experience design",
        "IT consulting",
        "Optimization IT consulting infrastructure",
      ],
      typeSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <ContentWrapper>
        <LeftContent>
          <LogoImage src={logo} alt="Logo not found" />
          <HomeTitle>IT-Outsourcing Company</HomeTitle>
          <SubTitle ref={typedTextRef}></SubTitle>
          <Button type="primary" minw="248px" maxw="120px" w="248px" h="56px">
            Contact
          </Button>
        </LeftContent>
        <RightContent>
          <LeftImage src={homeImage} alt="Image not found" />
        </RightContent>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
