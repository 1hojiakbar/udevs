import { useMediaQuery } from "@mui/material";
import Card from "../Card/Card";
import {
  BackgroundCover,
  BoxWrapper,
  CardWrapper,
  Container,
  ContentWrapper,
  GenericText,
  GenericTitle,
  LeftContentWrapper,
  RightImage,
  RightImageWrapper,
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
  margin,
}) => {
  const small = useMediaQuery("(max-width: 900px)");
  return (
    <Container m={margin}>
      <ContentWrapper>
        <GenericTitle>{title}</GenericTitle>
        <BoxWrapper>
          <LeftContentWrapper>
            {small && (
              <RightImageWrapper>
                <BackgroundCover>
                  <RightImage src={imgSrc} />
                </BackgroundCover>
              </RightImageWrapper>
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
          </LeftContentWrapper>
          {!small && (
            <RightImageWrapper>
              <BackgroundCover>
                <RightImage src={imgSrc} />
              </BackgroundCover>
            </RightImageWrapper>
          )}
        </BoxWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Section;
