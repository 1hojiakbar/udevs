import Card from "../Card/Card";
import { Flex, Image } from "antd";
import {
  CardWrapper,
  Container,
  ContentWrapper,
  GenericText,
  GenericTitle,
  SubCardSection,
  SubCardTitle,
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
}) => {
  return (
    <Container>
      <ContentWrapper>
        <Flex justify="start" align="start" vertical>
          <GenericTitle>{title}</GenericTitle>
          <GenericText>{text}</GenericText>
          <CardWrapper>
            {card?.map((item) => {
              const { cardType, cardIcon, cardTitle } = item;
              return <Card t={cardType} title={cardTitle} icon={cardIcon} />;
            })}
          </CardWrapper>
          <SubCardSection>
            <SubCardTitle>{subCardTitle}</SubCardTitle>
            {subCard?.map((item) => {
              const { cardIcon, cardTitle } = item;
              return <Card title={cardTitle} icon={cardIcon} />;
            })}
          </SubCardSection>
        </Flex>
        <Flex>
          <Image
            src={imgSrc}
            width={imgWidth}
            height={imgHeight}
            preview={false}
          />
        </Flex>
      </ContentWrapper>
    </Container>
  );
};

export default Section;
