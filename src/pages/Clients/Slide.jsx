import { Logo, SlideContainer } from "./style";

const Slide = ({ icon }) => {
  return (
    <SlideContainer>
      <Logo src={icon} alt="Client Logo" />
    </SlideContainer>
  );
};

export default Slide;
