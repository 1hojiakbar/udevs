import truckIcon from "../../assets/icons/iman-finance.svg";
import titleImg from "../../assets/icons/iman-title.svg";
import image from "../../assets/images/iman-section.png";
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
import GenericCard from "../../components/Generic/Card/Card";
import smsuzCardData from "../../utils/smsuz";

const Iman = () => {
  return (
    <Container>
      <ContentWrapper>
        <RightBox>
          <LeftBrandLogo src={titleImg} alt="image not found" />
          <Message>
            <Message.Icon src={truckIcon} />
            <Message.Title>Delivery</Message.Title>
          </Message>
          <RightBoxCenterText style={{ margin: "10px 0" }}>
            Iman - It is a mutual financing platform based on the principles of
            Islamic Finance. Buyers, sellers and investors meet here.
          </RightBoxCenterText>
          <RightBoxText>What we did?</RightBoxText>
          <CardWrapper>
            {smsuzCardData.map((value) => {
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
        <LeftBox>
          <LeftImage src={image} />
        </LeftBox>
      </ContentWrapper>
    </Container>
  );
};

export default Iman;
