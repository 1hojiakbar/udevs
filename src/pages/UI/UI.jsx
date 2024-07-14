import React from "react";
import uxImage from "../../assets/images/ux-section.png";
import uiCardData, { uiTechCardData, uiPageText } from "../../utils/ui-design";
import Section from "../../components/Generic/Left/Section";

const UI = () => {
  return (
    <>
      <Section
        title="UI / UX design"
        text={uiPageText}
        textWidth={"450px"}
        imgSrc={uxImage}
        card={uiCardData}
        type="small"
        subCardTitle="Technologies"
        subCard={uiTechCardData}
      />
    </>
  );
};

export default UI;