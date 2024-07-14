// card icons
import architectureIcon from "../assets/icons/architecture.svg";
import testingIcon from "../assets/icons/testing.svg";
import stressTestingIcon from "../assets/icons/stress-testing.svg";
import loadtestingIcon from "../assets/icons/loadtesting.svg";
import devopsIcon from "../assets/icons/devops.svg";
import cloudIcon from "../assets/icons/cloud.svg";
import ciCdIcon from "../assets/icons/ci-cd.svg";

const optimizationCardData = [
  {
    id: 1,
    cardIcon: architectureIcon,
    title: "Architecture",
    cardType: "dark",
  },
  {
    id: 2,
    cardIcon: testingIcon,
    title: "Auto testing",
    cardType: "dark",
  },
  {
    id: 3,
    cardIcon: stressTestingIcon,
    title: "Stress testing",
    cardType: "dark",
  },
  {
    id: 4,
    cardIcon: loadtestingIcon,
    title: "Load testing",
    cardType: "dark",
  },
  {
    id: 5,
    cardIcon: devopsIcon,
    title: "Devops",
    cardType: "dark",
  },
  {
    id: 6,
    cardIcon: cloudIcon,
    title: "Cloud",
    cardType: "dark",
  },
  {
    id: 7,
    cardIcon: ciCdIcon,
    title: "CI / CD",
    cardType: "dark",
  },
];

const optimizationSectionText = `Our experienced professionals will help you optimize your infrastructure`;

export default optimizationCardData;
export { optimizationSectionText };
