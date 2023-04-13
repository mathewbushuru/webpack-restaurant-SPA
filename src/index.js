"use strict";
import "./style.css"

import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroReview from "./components/HeroReview";

const root = document.getElementById("content");

root.appendChild(Header());
root.appendChild(Hero())
root.appendChild(HeroReview())
