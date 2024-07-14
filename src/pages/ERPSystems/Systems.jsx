import React from "react";
import erpSystemsCardData, {
  erpSystemSectionText,
} from "../../utils/erpSystems";
import Section from "../../components/Generic/Right/Section";
import erpRightImage from "../../assets/images/erp-section.png";

const Systems = () => {
  return (
    <>
      <Section
        title="ERP systems"
        text={erpSystemSectionText}
        card={erpSystemsCardData}
        imgSrc={erpRightImage}
      />
    </>
  );
};

export default Systems;
