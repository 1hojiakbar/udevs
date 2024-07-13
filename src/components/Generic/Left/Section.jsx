import Card from "../Card/Card";
import { Flex, Image } from "antd";
import {
  BackgroundCover,
  CardWrapper,
  Container,
  ContentWrapper,
  GenericText,
  GenericTitle,
  RightImage,
  RightImageWrapper,
  SubCardSection,
  SubCardTitle,
  SubCardWrapper,
} from "./style";

const Section = ({
  title,
  text,
  imgWidth,
  imgHeight,
  imgSrc,
  card,
  subCard,
  subCardTitle,
  bgImage,
}) => {
  return (
    <Container>
      <ContentWrapper>
        <Flex justify="start" align="start" vertical>
          <GenericTitle>{title}</GenericTitle>
          <GenericText>{text}</GenericText>
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
              {subCard?.map((item) => {
                const { id, cardIcon, title } = item;
                return (
                  <Card
                    key={id}
                    title={title}
                    icon={cardIcon}
                    center="center"
                  />
                );
              })}
            </SubCardWrapper>
          </SubCardSection>
        </Flex>
        <RightImageWrapper>
          <BackgroundCover>
            <RightImage src={imgSrc} />
          </BackgroundCover>
        </RightImageWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Section;
