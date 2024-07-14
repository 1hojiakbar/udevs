import frontendIcon from "../assets/icons/frontend.svg";
import backendIcon from "../assets/icons/backend.svg";
import architectureIcon from "../assets/icons/architecture.svg";
import devopsIcon from "../assets/icons/devops.svg";
import uiIcon from "../assets/icons/ui-ux.svg";
import qaIcon from "../assets/icons/qa.svg";

const consultingCardData = [
  {
    id: 1,
    cardIcon: frontendIcon,
    title: "Frontend",
    cardType: "science",
  },
  {
    id: 2,
    cardIcon: backendIcon,
    title: "Backen",
    cardType: "science",
  },
  {
    id: 3,
    cardIcon: architectureIcon,
    title: "Architecture",
    cardType: "science",
  },
  {
    id: 4,
    cardIcon: devopsIcon,
    title: "DevOps",
    cardType: "science",
  },
  {
    id: 5,
    cardIcon: uiIcon,
    title: "UX/UI",
    cardType: "science",
  },
  {
    id: 6,
    cardIcon: qaIcon,
    title: "QA",
    cardType: "science",
  },
];

const consultingPageText = `We can improve the qualifications of your employees thereby increasing the efficiency of your company`;

export default consultingCardData;
export { consultingPageText };
