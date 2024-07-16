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
import { Link } from "react-scroll";
import { useBreakpoint } from "../../context/BreakpointContext";

const Home = () => {
  const breakpoint = useBreakpoint();
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
          <Button
            type="primary"
            minw="248px"
            maxw="120px"
            w="248px"
            h="56px"
            minh="56px"
          >
            <Link to="/contact" smooth="true" duration={600}>
              Contact
            </Link>
          </Button>
          <div>
            <h1>Current Breakpoint: {breakpoint}</h1>
            {/* Breakpoint bo'yicha tegishli kontent */}
            {breakpoint === "1400px" && (
              <div>1400px va undan katta ekranlar</div>
            )}
            {breakpoint === "1200px" && (
              <div>1200px va undan katta ekranlar</div>
            )}
            {breakpoint === "992px" && <div>992px va undan katta ekranlar</div>}
            {breakpoint === "800px" && <div>800px va undan katta ekranlar</div>}
            {breakpoint === "768px" && <div>768px va undan katta ekranlar</div>}
            {breakpoint === "567px" && <div>567px va undan katta ekranlar</div>}
            {breakpoint === "375px" && <div>375px va undan katta ekranlar</div>}
          </div>
        </LeftContent>
        <RightContent>
          <LeftImage src={homeImage} alt="Image not found" />
        </RightContent>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
