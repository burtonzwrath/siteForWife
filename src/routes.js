import {
  ABOUT_ROUTE,
  CALC_ROUTE,
  CHAT_ROUTE,
  FORM_ROUTE,
  MAIN_ROUTE,
  HEART_ROUTE,
  CLOCK_ROUTE,
  DOSYAGNENYA_ROUTE,
} from "./constants/consts";

import AboutMe from "./components/AboutMe";
import Form from "./components/Form";
import MainPage from "./components/MainPage";
import ChatOnline from "./components/ChatOnline";
import Calculator from "./components/Calculator";
import Heart from "./components/Heart";
import Clock from "./components/Clock";
import Dosyagnenya from "./components/Dosyagnenya";

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
    path: CHAT_ROUTE,
    Component: ChatOnline,
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
    path: DOSYAGNENYA_ROUTE,
    Component: Dosyagnenya,
  },
];
