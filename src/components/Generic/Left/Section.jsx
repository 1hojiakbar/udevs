import Card from "../Card/Card";
import {
  BackgroundCover,
  BoxWrapper,
  ContentWrapper,
  LeftImage,
  LeftImageWrapper,
} from "../Right/style";
import { CardWrapper, Container, GenericText, GenericTitle } from "./style";

const Section = ({
  title,
  text,
  imgSrc,
  card,
  subCard,
  subCardTitle,
  bgImage,
  cardWidth,
  textWidth,
}) => {
  return (
    <Container>
      <ContentWrapper>
        <GenericTitle>{title}</GenericTitle>
        <BoxWrapper>
          <div
            style={{
              display: "flex",
              border: "1px solid red",
              flexDirection: "column",
              height: "500px",
              alignContent: "flex-start",
            }}
          >
            <GenericText type="medium" w={textWidth}>
              {text}
            </GenericText>
            <CardWrapper>
              {card?.map((item) => {
                const { id, cardType, cardIcon, title } = item;
                return (
                  <Card key={id} t={cardType} title={title} icon={cardIcon} />
                );
              })}
            </CardWrapper>
            <div></div>
          </div>
          <LeftImageWrapper>
            <BackgroundCover>
              <LeftImage src={imgSrc} />
            </BackgroundCover>
          </LeftImageWrapper>
        </BoxWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Section;
