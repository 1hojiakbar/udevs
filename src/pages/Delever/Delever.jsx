import truckIcon from "../../assets/icons/truck.svg";
import titleImg from "../../assets/icons/delever-title.svg";
import image from "../../assets/images/delever-section.png";
import { LeftImage } from "../../components/Generic/Right/style";
import {
  Container,
  ContentWrapper,
  LeftBox,
  LeftBrandLogo,
  Message,
  RightBox,
  RightBoxCenterText,
  RightBoxText,
} from "./style";

const Delever = () => {
  return (
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
          <RightBoxCenterText style={{ margin: "10px 0" }}>
            Delever - Delivery service automation targeted at both consumers and
            restaurants.
          </RightBoxCenterText>
          <RightBoxText>What we did?</RightBoxText>
        </RightBox>
      </ContentWrapper>
    </Container>
  );
};

export default Delever;
