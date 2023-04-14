import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsletterSection from "../components/NewsletterSection";
import ParallaxSection1 from "../components/ParallaxSection1";
import ParallaxSection2 from "../components/ParallaxSection2";
import Divider from "../components/ui/Divider";

import { createElement } from "../utils";

const contactElements = [
  Header,
  ComingSoon,
  Divider,
  ParallaxSection2,
  Footer,
];

const root = document.getElementById("content");

export default function ContactPage() {
  root.innerHTML = null;

  for (let element of contactElements) {
    root.appendChild(element());
  }
}

function ComingSoon() {
  const h1El = createElement({
    htmlEl: "h1",
    content: "Contact Page!",
    className:"comingSoon"
  });

  const heroEl = createElement({
    htmlEl: "div",
    className: "heroWrapper",
    children: [h1El],
  });

  return heroEl;
}
