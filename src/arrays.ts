import { sidebarLinks } from "@/types";
// assets
import {
  faBagShopping,
  faCartShopping,
  faUserGroup,
  faUsers,
  faCalendar,
  faBorderAll,
  faPenToSquare,
  faEyeDropper,
  faChartLine,
  faChartColumn,
  faChartPie,
  faCoins,
  faSignal,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

export const arrOfSidebarLinks: sidebarLinks[] = [
  {
    title: "dashboard",
    links: [{ img: faBagShopping, txt: "Ecommerce", link: "" }],
  },
  {
    title: "pages",
    links: [
      { img: faCartShopping, txt: "Orders", link: "" },
      { img: faUserGroup, txt: "Employees", link: "" },
      { img: faUsers, txt: "Customers", link: "" },
    ],
  },
  {
    title: "apps",
    links: [
      { img: faCalendar, txt: "Calendar", link: "" },
      { img: faBorderAll, txt: "Kanban", link: "" },
      { img: faPenToSquare, txt: "Editor", link: "" },
      { img: faEyeDropper, txt: "Color-Picker", link: "" },
    ],
  },
  {
    title: "charts",
    links: [
      { img: faChartLine, txt: "Line", link: "" },
      { img: faChartColumn, txt: "Area", link: "" },
      { img: faChartColumn, txt: "Bar", link: "" },
      { img: faChartPie, txt: "Pie", link: "" },
      { img: faCoins, txt: "Financial", link: "" },
      { img: faSignal, txt: "Color-Mapping", link: "" },
      { img: faCaretUp, txt: "Pyramid", link: "" },
    ],
  },
];
