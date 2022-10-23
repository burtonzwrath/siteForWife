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

import AboutMe from "./components/aboutMe/AboutMe";
import Form from "./components/form/FormPage";
import MainPage from "./components/mainPage/MainPage";
import Calculator from "./components/calculator/Calculator";
import Heart from "./components/heart/Heart";
import Clock from "./components/clock/Clock";
import Achievement from "./components/achievement/Achievement";
import Contacts from "./components/contacts/Contacts";

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
