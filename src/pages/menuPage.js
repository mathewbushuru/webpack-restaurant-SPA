import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsletterSection from "../components/NewsletterSection";
import ParallaxSection1 from "../components/ParallaxSection1";
import ParallaxSection2 from "../components/ParallaxSection2";
import Divider from "../components/ui/Divider";

import { createElement } from "../utils";

const menuElements = [
  Header,
  ComingSoon,
  Divider,
  ParallaxSection1,
  NewsletterSection,
  ParallaxSection2,
  Footer,
];

const root = document.getElementById("content");

export default function MenuPage() {
  root.innerHTML = null;

  for (let element of menuElements) {
    root.appendChild(element());
  }
}

function ComingSoon() {
  const h1El = createElement({
    htmlEl: "h1",
    content: "Menu page coming soon!",
    className:"comingSoon"
  });

  const heroEl = createElement({
    htmlEl: "div",
    className: "heroWrapper",
    children: [h1El],
  });

  return heroEl;
}
