// card icons
import uxIcon from "../assets/icons/ux-ux.svg";
import uiIcon from "../assets/icons/ux-ui.svg";
import uxPrototypingIcon from "../assets/icons/ux-prototyping.svg";
import uiMoblieIcon from "../assets/icons/ui-mobile-design.svg";
import uiWebDesignIcon from "../assets/icons/ui-web-design.svg";
import uiAtomicDesignIcon from "../assets/icons/ui-atomic-design.svg";

// ui section tech icons
import figmaIcon from "../assets/icons/figma.svg";
import sketchIcon from "../assets/icons/sketch.svg";
import lottieIcon from "../assets/icons/lottie.svg";
import illustratorIcon from "../assets/icons/illustrator.svg";

const uiCardData = [
  {
    id: 1,
    cardIcon: uxIcon,
    title: "UX",
    cardType: "science",
  },
  {
    id: 2,
    cardIcon: uiIcon,
    title: "UI",
    cardType: "science",
  },
  {
    id: 3,
    cardIcon: uxPrototypingIcon,
    title: "Prototyping",
    cardType: "science",
  },
  {
    id: 4,
    cardIcon: uiMoblieIcon,
    title: "Mobile Design",
    cardType: "science",
  },
  {
    id: 5,
    cardIcon: uiWebDesignIcon,
    title: "Web Design",
    cardType: "science",
  },
  {
    id: 6,
    cardIcon: uiAtomicDesignIcon,
    title: "Atomic Design",
    cardType: "science",
  },
];

const uiTechCardData = [
  {
    id: 1,
    cardIcon: figmaIcon,
    title: "Figma",
  },
  {
    id: 2,
    cardIcon: sketchIcon,
    title: "Sketch",
  },
  {
    id: 3,
    cardIcon: lottieIcon,
    title: "Lottie",
  },
  {
    id: 4,
    cardIcon: illustratorIcon,
    title: "Illustrator",
  },
];

const uiPageText = `Our company takes a human-centered approach to design`;

export default uiCardData;
export { uiTechCardData, uiPageText };
