// card icons
import crmIcon from "../assets/icons/crm.svg";
import learningIcon from "../assets/icons/learning.svg";
import eCommerceIcon from "../assets/icons/e-commerce.svg";
import posIcon from "../assets/icons/pos.svg";
import emailIcon from "../assets/icons/email.svg";
import warehouseIcon from "../assets/icons/warehouse.svg";

const erpSystemsCardData = [
  {
    id: 1,
    cardIcon: crmIcon,
    title: "CRM",
    cardType: "dark",
  },
  {
    id: 2,
    cardIcon: learningIcon,
    title: "eLearning",
    cardType: "dark",
  },
  {
    id: 3,
    cardIcon: eCommerceIcon,
    title: "E-Commerce",
    cardType: "dark",
  },
  {
    id: 4,
    cardIcon: posIcon,
    title: "POS",
    cardType: "dark",
  },
  {
    id: 5,
    cardIcon: emailIcon,
    title: "Sms / Email",
    cardType: "dark",
  },
  {
    id: 6,
    cardIcon: warehouseIcon,
    title: "Warehouse",
    cardType: "dark",
  },
];

const erpSystemSectionText = `IT Systems of any level of complexity at a convenient time for you`;

export default erpSystemsCardData;
export { erpSystemSectionText };
