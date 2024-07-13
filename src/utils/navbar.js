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
    children: [
      {
        id: "1-1",
        label: "1st menu item",
        path: "/mobile",
        className: "custom-dropdown-menu-item",
      },
      {
        id: "1-2",
        label: "2nd menu item",
        path: "/system",
        className: "custom-dropdown-menu-item",
      },
      {
        id: "1-3",
        label: "3rd menu item",
        path: "/interface",
        className: "custom-dropdown-menu-item",
      },
      {
        id: "1-4",
        label: "4th menu item",
        path: "/consulting",
        className: "custom-dropdown-menu-item",
      },
      {
        id: "1-5",
        label: "5th menu item",
        path: "/optimization",
        className: "custom-dropdown-menu-item",
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
    element: "dropdown",
    children: [
      {
        id: "1-1",
        label: "1st menu item",
        path: "/mobile",
        className: "custom-dropdown-menu-item",
      },
      {
        id: "1-2",
        label: "2nd menu item",
        path: "/system",
        className: "custom-dropdown-menu-item",
      },
      {
        id: "1-3",
        label: "3rd menu item",
        path: "/interface",
        className: "custom-dropdown-menu-item",
      },
      {
        id: "1-4",
        label: "4th menu item",
        path: "/consulting",
        className: "custom-dropdown-menu-item",
      },
    ],
  },
  {
    id: 7,
    type: "group",
    label: "Language",
    element: "dropdown",
    children: [
      {
        id: "1-1",
        label: "Rus",
        path: "/russian",
        className: "custom-dropdown-menu-item",
      },
      {
        id: "1-2",
        label: "Eng",
        path: "/english",
        className: "custom-dropdown-menu-item",
      },
    ],
  },
];

export default navbar;
