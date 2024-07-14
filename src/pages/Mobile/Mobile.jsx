import mobileCardData, {
  mobilePageText,
  mobileTechCardData,
} from "../../utils/mobileApp";
import Section from "../../components/Generic/Left/Section";
import mobileSection from "../../assets/images/mobile-section.png";

const Mobile = () => {
  return (
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
  );
};

export default Mobile;
