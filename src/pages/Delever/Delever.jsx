import truckIcon from "../../assets/icons/truck.svg";
import titleImg from "../../assets/icons/delever-title.svg";
import image from "../../assets/images/delever-section.png";
import { LeftImage } from "../../components/Generic/Right/style";
import {
  CardWrapper,
  Container,
  ContentWrapper,
  LeftBox,
  LeftBrandLogo,
  Message,
  RightBox,
  RightBoxCenterText,
  RightBoxText,
} from "./style";
import deleverCardData from "../../utils/delever";
import GenericCard from "../../components/Generic/Card/Card";
import { Element } from "react-scroll";

const Delever = () => {
  return (
    <Element name="delever">
      <Container>
        <ContentWrapper>
          <LeftBox>
            <LeftImage src={image} />
          </LeftBox>
          <RightBox>
            <LeftBrandLogo src={titleImg} alt="image not found" />
            <Message>
              <Message.Icon src={truckIcon} />
              <Message.Title>Delivery</Message.Title>
            </Message>
            <RightBoxCenterText>
              Delever - Delivery service automation targeted at both consumers
              and restaurants.
            </RightBoxCenterText>
            <RightBoxText>What we did?</RightBoxText>
            <CardWrapper>
              {deleverCardData.map((value) => {
                return (
                  <GenericCard
                    key={value.id}
                    icon={value.icon}
                    title={value.title}
                  />
                );
              })}
            </CardWrapper>
          </RightBox>
        </ContentWrapper>
      </Container>
    </Element>
  );
};

export default Delever;
