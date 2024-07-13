import servicesCardData from "../../utils/ourServices";
import Title from "../../components/Generic/Title/Title";
import GenericCard from "../../components/Generic/Card/Card";
import { CardWrapper, Container, SectionWrapper } from "./style";

const Services = () => {
  return (
    <Container>
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
                iconSize="35px"
                type="science"
                icon={card.icon}
                title={card.title}
              />
            );
          })}
        </CardWrapper>
      </SectionWrapper>
    </Container>
  );
};

export default Services;
