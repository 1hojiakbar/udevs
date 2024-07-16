// navbar item data
const navbar = [
  {
    id: 1,
    label: "Direction",
    path: "/direction",
    smooth: "true",
    duration: 500,
    element: "link",
  },
  {
    id: 2,
    label: "Command",
    path: "/command",
    smooth: "true",
    duration: 500,
    element: "link",
  },
  {
    id: 3,
    type: "group",
    label: "Services",
    path: "/services",
    element: "dropdown",
    width: 325,
    height: 171,
    children: [
      {
        id: "1-1",
        label: "Development of mobile applications",
        path: "/mobile",
      },
      {
        id: "1-2",
        label: "Development and implementation ERP systems",
        path: "/system",
      },
      {
        id: "1-3",
        label: "User interface, User experience design",
        path: "/interface",
      },
      {
        id: "1-4",
        label: "IT consulting",
        path: "/consulting",
      },
      {
        id: "1-5",
        label: "Optimization IT consulting infrastructure",
        path: "/optimization",
      },
    ],
  },
  {
    id: 4,
    label: "Tools",
    element: "link",
    path: "/tools",
    smooth: "true",
    duration: 500,
  },
  {
    id: 5,
    label: "Clients",
    element: "link",
    path: "/clients",
    smooth: "true",
    duration: 500,
  },

  {
    id: 6,
    type: "group",
    label: "Portifolio",
    path: "/Portifolio",
    width: 145,
    height: 140,
    element: "dropdown",
    children: [
      {
        id: "1-1",
        label: "Delever",
        path: "/delever",
      },
      {
        id: "1-2",
        label: "Sms.uz",
        path: "/smsuz",
      },
      {
        id: "1-3",
        label: "Goodzone",
        path: "/goodzone",
      },
      {
        id: "1-4",
        label: "Iman",
        path: "/iman",
      },
    ],
  },
  {
    id: 7,
    type: "group",
    label: "Language",
    width: 115,
    height: 75,
    element: "dropdown",
    children: [
      {
        id: "1-1",
        label: "Rus",
        path: "/russian",
      },
      {
        id: "1-2",
        label: "Eng",
        path: "/english",
      },
    ],
  },
];

export default navbar;
