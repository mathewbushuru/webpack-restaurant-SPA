"use strict";

import "./style.css";

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import MenuPage from "./pages/menuPage";
import GiftPage from "./pages/giftPage";
import CareerPage from "./pages/careerPage";
import ContactPage from "./pages/contactPage";

export function Router(to = "home") {
  switch (to) {
    case "home":
      HomePage();
      break;
    case "about":
      AboutPage();
      break;
    case "menu":
      MenuPage();
      break;
    case "gift":
      GiftPage();
      break;
    case "career":
      CareerPage();
      break;
    case "contact":
      ContactPage();
      break;

    default:
      break;
  }
}

Router("home");
