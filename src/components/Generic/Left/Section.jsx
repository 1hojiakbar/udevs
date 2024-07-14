import Card from "../Card/Card";
import {
  BackgroundCover,
  BoxWrapper,
  ContentWrapper,
  LeftImage,
  LeftImageWrapper,
} from "../Right/style";
import {
  CardWrapper,
  Container,
  GenericText,
  GenericTitle,
  SubCardSection,
  SubCardTitle,
  SubCardWrapper,
} from "./style";

const Section = ({
  title,
  text,
  imgSrc,
  card,
  subCard,
  subCardTitle,
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
              height: "max-content",
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
            <SubCardSection>
              <SubCardTitle>{subCardTitle}</SubCardTitle>
              <SubCardWrapper>
                {subCard.map(({ id, cardIcon, title }) => {
                  return <Card key={id} icon={cardIcon} title={title} />;
                })}
              </SubCardWrapper>
            </SubCardSection>
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
