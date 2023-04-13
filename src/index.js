"use strict";
import "./style.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroReview from "./components/HeroReview";
import Divider from "./components/ui/Divider";
import MenuSection from "./components/MenuSection";
import ParallaxSection1 from "./components/ParallaxSection1";
import NewsletterSection from "./components/NewsletterSection";
import ParallaxSection2 from "./components/ParallaxSection2";
import Footer from "./components/Footer";

const root = document.getElementById("content");

root.appendChild(Header());
root.appendChild(Hero());
root.appendChild(HeroReview());
root.appendChild(Divider());
root.appendChild(MenuSection());
root.appendChild(Divider());
root.appendChild(ParallaxSection1());
root.appendChild(NewsletterSection());
root.appendChild(ParallaxSection2());
root.appendChild(Footer());
