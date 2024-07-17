import React from "react";
import uxImage from "../../assets/images/ux-section.png";
import uiCardData, { uiTechCardData, uiPageText } from "../../utils/ui.js";
import Section from "../../components/Generic/Left/Section";

const UI = () => {
  return (
    <>
      <Section
        title="UI / UX design"
        text={uiPageText}
        textWidth={"450px"}
        margin="200px 0 0 0"
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
