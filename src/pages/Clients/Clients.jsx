import {
  Container,
  SlideBottom,
  SliderContainer,
  SlideTop,
  TitleWrapper,
} from "./style";
import { GenericTitle } from "../../components/Generic/Left/style";
import { clientsTopData, clientsBottomData } from "../../utils/clients";
import Slide from "./Slide";

const Clients = () => {
  return (
    <Container>
      <TitleWrapper>
        <GenericTitle>Our Clients</GenericTitle>
      </TitleWrapper>
      <SliderContainer>
        <SlideTop>
          {clientsTopData.map((client) => (
            <Slide key={client.id} icon={client.icon} />
          ))}
        </SlideTop>
      </SliderContainer>
      <SliderContainer>
        <SlideBottom>
          {clientsBottomData.map((client) => (
            <Slide key={client.id} icon={client.icon} />
          ))}
        </SlideBottom>
      </SliderContainer>
    </Container>
  );
};

export default Clients;
