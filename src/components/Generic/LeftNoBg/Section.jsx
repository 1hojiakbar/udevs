import { useMediaQuery } from "@mui/material";
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
  const small = useMediaQuery("(max-width: 900px)");
  return (
    <Container>
      <ContentWrapper>
        <GenericTitle>{title}</GenericTitle>
        <BoxWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "max-content",
              alignContent: "flex-start",
            }}
          >
            {small && (
              <LeftImageWrapper>
                <LeftImage src={imgSrc} />
              </LeftImageWrapper>
            )}
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
                {subCard &&
                  subCard.map(({ id, cardIcon, title }) => {
                    return <Card key={id} icon={cardIcon} title={title} />;
                  })}
              </SubCardWrapper>
            </SubCardSection>
          </div>
          {!small && (
            <LeftImageWrapper>
              <LeftImage src={imgSrc} />
            </LeftImageWrapper>
          )}
        </BoxWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Section;
