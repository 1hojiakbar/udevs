import mobileCardData, {
  mobilePageText,
  mobileTechCardData,
} from "../../utils/mobileApp";
import Section from "../../components/Generic/Left/Section";
import mobileSection from "../../assets/images/mobile-section.png";
import { Element } from "react-scroll";

const Mobile = () => {
  return (
    <Element name="/mobile">
      <Section
        title="Development of mobile applications"
        text={mobilePageText}
        bgImage={"true"}
        textWidth={"450px"}
        card={mobileCardData}
        imgSrc={mobileSection}
        subCardTitle="Technologies"
        subCard={mobileTechCardData}
      />
    </Element>
  );
};

export default Mobile;
