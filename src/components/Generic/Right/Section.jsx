import Card from "../Card/Card";
import { CardWrapper, GenericText, GenericTitle } from "../Left/style";
import {
  BackgroundCover,
  BoxWrapper,
  Container,
  ContentWrapper,
  LeftImage,
  LeftImageWrapper,
  RightContent,
} from "./style";

const Section = ({ title, text, imgSrc, card, bgImage }) => {
  console.log(bgImage);
  return (
    <Container>
      <ContentWrapper>
        <GenericTitle>{title}</GenericTitle>
        <BoxWrapper>
          <LeftImageWrapper>
            <BackgroundCover bool={bgImage && bgImage}>
              <LeftImage src={imgSrc} />
            </BackgroundCover>
          </LeftImageWrapper>
          <RightContent>
            <GenericText>{text}</GenericText>
            <CardWrapper>
              {card?.map((item) => {
                const { id, cardType, cardIcon, title } = item;
                return (
                  <Card key={id} t={cardType} title={title} icon={cardIcon} />
                );
              })}
            </CardWrapper>
          </RightContent>
        </BoxWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Section;
