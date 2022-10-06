import {
  ABOUT_ROUTE,
  CALC_ROUTE,
  FORM_ROUTE,
  MAIN_ROUTE,
  HEART_ROUTE,
  CLOCK_ROUTE,
  ACHIEVEMENT_ROUTE,
  CONTACTS_ROUTE,
} from "./constants/consts";

import AboutMe from "./components/AboutMe";
import Form from "./components/FormPage";
import MainPage from "./components/MainPage";
import Calculator from "./components/Calculator";
import Heart from "./components/Heart";
import Clock from "./components/Clock";
import Achievement from "./components/Achievement";
import Contacts from "./components/Contacts";

export const navRoutes = [
  {
    path: ABOUT_ROUTE,
    Component: AboutMe,
  },
  {
    path: FORM_ROUTE,
    Component: Form,
  },
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },

  {
    path: CALC_ROUTE,
    Component: Calculator,
  },
  {
    path: HEART_ROUTE,
    Component: Heart,
  },
  {
    path: CLOCK_ROUTE,
    Component: Clock,
  },
  {
    path: ACHIEVEMENT_ROUTE,
    Component: Achievement,
  },
  {
    path: CONTACTS_ROUTE,
    Component: Contacts,
  },
];
