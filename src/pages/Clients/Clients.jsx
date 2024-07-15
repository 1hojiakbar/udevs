import React from "react";
import Marquee from "react-fast-marquee";
import img from "../../assets/icons/my-taxi.svg";
import { GenericTitle } from "../../components/Generic/Left/style";
import { clientsTopData, clientsBottomData } from "../../utils/clients";
import { Container, Logo, SliderContainer, TitleWrapper } from "./style";

const Clients = () => {
  return (
    <Container>
      <TitleWrapper>
        <GenericTitle>Our Clients</GenericTitle>
      </TitleWrapper>
      <SliderContainer>
        <Marquee gradient={false} speed={25}>
          {clientsTopData.map((client) => (
            <Logo
              key={client.id}
              src={client.icon}
              alt={`client-${client.id}`}
            />
          ))}
        </Marquee>
      </SliderContainer>
      <SliderContainer>
        <Marquee gradient={false} speed={25} direction="right">
          {clientsBottomData.map((client) => (
            <Logo
              key={client.id}
              src={client.icon}
              alt={`client-${client.id}`}
            />
          ))}
        </Marquee>
      </SliderContainer>
    </Container>
  );
};

export default Clients;
