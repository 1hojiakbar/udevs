import titleImg from "../../assets/images/goodzone.png";
import image from "../../assets/images/goodzone-section.png";
import truckIcon from "../../assets/icons/goodzone-min-icon.svg";
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

const Goodzone = () => {
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
            <Message.Title>E-Commerce</Message.Title>
          </Message>
          <RightBoxCenterText style={{ margin: "10px 0" }}>
            Goodzone - Internet shop of household appliances in Uzbekistan.
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
  );
};

export default Goodzone;
