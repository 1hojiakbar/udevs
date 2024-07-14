import Section from "../../components/Generic/LeftNoBg/Section";
import consultingImage from "../../assets/images/it-consulting-section.svg";
import consultingCardData, { consultingPageText } from "../../utils/consulting";

const Consulting = () => {
  return (
    <>
      <Section
        title="IT consulting"
        text={consultingPageText}
        textWidth={"450px"}
        imgSrc={consultingImage}
        card={consultingCardData}
        bgImage={Boolean(false).valueOf().toString()}
      />
    </>
  );
};

export default Consulting;
