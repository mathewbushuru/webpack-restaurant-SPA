import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroReview from "../components/HeroReview";
import Divider from "../components/ui/Divider";
import MenuSection from "../components/MenuSection";
import ParallaxSection1 from "../components/ParallaxSection1";
import NewsletterSection from "../components/NewsletterSection";
import ParallaxSection2 from "../components/ParallaxSection2";
import Footer from "../components/Footer";

const homeElements = [
  Header,
  Hero,
  HeroReview,
  Divider,
  MenuSection,
  Divider,
  ParallaxSection1,
  NewsletterSection,
  ParallaxSection2,
  Footer,
];

const root = document.getElementById("content");

export default function HomePage() {
  root.innerHTML = null;

  for (let element of homeElements) {
    root.appendChild(element());
  }
}
