import Card from "../Card/Card";
import { CardWrapper, GenericText } from "../Left/style";
import Title from "../Title/Title";
import {
  BackgroundCover,
  BoxWrapper,
  Container,
  ContentWrapper,
  LeftImage,
  LeftImageWrapper,
  RightContent,
} from "./style";

const Section = ({ title, text, imgSrc, card }) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>{title}</Title>
        <BoxWrapper>
          <LeftImageWrapper>
            <BackgroundCover>
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
