import truckIcon from "../../assets/icons/email.svg";
import titleImg from "../../assets/icons/smsuz-title.svg";
import image from "../../assets/images/smsuz-section.png";
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
import { useMediaQuery } from "@mui/material";

const Smsuz = () => {
  const small = useMediaQuery("(max-width: 900px)");
  return (
    <Container>
      <ContentWrapper>
        <RightBox>
          <LeftBrandLogo src={titleImg} alt="image not found" />
          <Message>
            <Message.Icon src={truckIcon} />
            <Message.Title>Notfication</Message.Title>
          </Message>
          {small && (
            <LeftBox>
              <LeftImage src={image} />
            </LeftBox>
          )}
          <RightBoxCenterText>
            Smsuz.uz - It is a platform for bulk SMS messaging.
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
        {!small && (
          <LeftBox>
            <LeftImage src={image} />
          </LeftBox>
        )}
      </ContentWrapper>
    </Container>
  );
};

export default Smsuz;
