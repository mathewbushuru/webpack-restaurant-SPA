"use strict";
import "./style.css"

import Header from "./components/Header";
import Hero from "./components/Hero";

const root = document.getElementById("content");

root.appendChild(Header());
root.appendChild(Hero())
