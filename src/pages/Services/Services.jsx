import servicesCardData from "../../utils/ourServices";
import Title from "../../components/Generic/Title/Title";
import GenericCard from "../../components/Generic/Card/Card";
import { CardWrapper, Container, SectionWrapper } from "./style";
import { Element } from "react-scroll";

const Services = () => {
  return (
    <Container>
      <Element name="/direction">
        <SectionWrapper>
          <Title mb="42px">Our Services</Title>
          <CardWrapper>
            {servicesCardData.map((card) => {
              return (
                <GenericCard
                  key={card.id}
                  w="100%"
                  h="155px"
                  xg="8px"
                  pt="20px"
                  pr="40px"
                  pb="25px"
                  pl="20px"
                  type="science"
                  icon={card.icon}
                  title={card.title}
                />
              );
            })}
          </CardWrapper>
        </SectionWrapper>
      </Element>
    </Container>
  );
};

export default Services;
