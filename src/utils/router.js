import HomePage from "../pages/Home/Home";
import ServicesPage from "../pages/Services/Services";
import TeamPage from "../pages/Team/Team";
import MobilePage from "../pages/Mobile/Mobile";
import SystemsPage from "../pages/ERPSystems/Systems";
import UIPage from "../pages/UI/UI";
import OptimizationPage from "../pages/Optimization/Optimization";
import ConsultingPage from "../pages/Consulting/Consulting";
import ToolsPage from "../pages/Tools/Tools";
import ClientsPage from "../pages/Clients/Clients";
import DeleverPage from "../pages/Delever/Delever";
import SmsuzPage from "../pages/Smsuz/Smsuz";
import GoodzonePage from "../pages/Goodzone/Goodzone";
import ImanPage from "../pages/Iman/Iman";
import HowWeWorkPage from "../pages/HowWeWork/";
import ContactPage from "../pages/Contact/Contact";
import Footer from "../pages/Footer/Footer";

const pages = [
  {
    id: 1,
    element: HomePage,
    path: "/home",
  },
  {
    id: 2,
    element: ServicesPage,
    path: "/direction",
  },
  {
    id: 3,
    element: TeamPage,
    path: "/command",
  },
  {
    id: 4,
    element: MobilePage,
    path: "/mobile",
  },
  {
    id: 5,
    element: SystemsPage,
    path: "/system",
  },
  {
    id: 6,
    element: UIPage,
    path: "/interface",
  },
  {
    id: 7,
    element: OptimizationPage,
    path: "/optimization",
  },
  {
    id: 8,
    element: ConsultingPage,
    path: "/consulting",
  },
  {
    id: 9,
    element: ToolsPage,
    path: "/tools",
  },
  {
    id: 10,
    element: ClientsPage,
    path: "/clients",
  },
  {
    id: 11,
    element: DeleverPage,
    path: "/delever",
  },
  {
    id: 12,
    element: SmsuzPage,
    path: "/smsuz",
  },
  {
    id: 13,
    element: GoodzonePage,
    path: "/goodzone",
  },
  {
    id: 14,
    element: ImanPage,
    path: "/iman",
  },
  {
    id: 15,
    element: HowWeWorkPage,
  },
  {
    id: 16,
    element: ContactPage,
    path: "/contact",
  },
  {
    id: 17,
    element: Footer,
    path: "/footer",
  },
];

export default pages;
