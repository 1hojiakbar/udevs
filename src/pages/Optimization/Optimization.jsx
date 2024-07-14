import optimizationCardData, {
  optimizationSectionText,
} from "../../utils/optimization";
import Section from "../../components/Generic/Right/Section";
import optimizationRightImage from "../../assets/images/erp-section.png";

const Optimization = () => {
  return (
    <>
      <Section
        title="Optimization Infrastructure"
        text={optimizationSectionText}
        card={optimizationCardData}
        imgSrc={optimizationRightImage}
      />
    </>
  );
};

export default Optimization;
