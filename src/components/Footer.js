import { createElement } from "../utils";
import { Router } from "..";
import Image from "./ui/Image";

import dividerImgSrc from "../images/divider.svg";
import ghIconSrc from "../images/github.png";

const navItems = [
  { name: "About", link: "about" },
  { name: "Menu", link: "menu" },
  { name: "Gift Cards", link: "gift" },
  { name: "Career", link: "career" },
  { name: "Contact", link: "contact" },
];

const addressItems = [
  "4721 IMPERIAL AVENUE <br /> CORUSCANT CITY, CORUSCANT SYSTEM <br /> GALACTIC EMPIRE 23912",
  "CALL US <br /> +98902 (132-24) 56-78",
  "FOR GENERAL INQUIRIES <br /> INFO@CORUSCANTCAFE.GAL",
  "FOLLOW US <br/> @CORUSCANTCAFE",
  "FOR ALL PR INQUIRIES <br/> PR@EMPIREHOSPITALITY.GAL",
];

const hoursItems = [
  "BRUNCH <br/> SATURDAY – SUNDAY <br/> 10:00 AM – 2:30 PM <br />",
  "LUNCH <br/> WEEKDAYS <br/> 11:30 AM – 2:30 PM <br/>",
  "DINNER <br/> SUNDAY – THURSDAY <br/> 5:00 PM – 10:00 PM <br/>  FRIDAY & SATURDAY <br/> 5:00 PM – 11:00 PM<br/>",
];

export default function Footer() {
  const dividerImg = Image(null, dividerImgSrc, "");

  let navItemsElChildren = [];
  for (let el of navItems) {
    const navItem = document.createElement("li");
    navItem.textContent = el.name;
    navItem.onclick = ()=>Router(el.link)
    navItemsElChildren.push(navItem);
  }

  const navItemsEl = createElement({
    htmlEl: "ul",
    className: "navItems",
    content: null,
    children: navItemsElChildren,
  });

  const bottomNav = createElement({
    className: "bottomNav",
    children: [dividerImg, navItemsEl],
  });

  let addressChildren = [];
  for (let item of addressItems) {
    const itemEl = createElement({
      htmlEl: "p",
      content: item,
      innerHTML: true,
    });
    addressChildren.push(itemEl);
  }
  const address = createElement({
    className: "address",
    children: addressChildren,
  });

  const footerLogo = createElement({
    htmlEl: "h2",
    content: "The Coruscant Cafe",
    className: "logo",
  });
  footerLogo.onclick = () => Router("home");

  let hoursChildren = [];
  for (let item of hoursItems) {
    const itemEl = createElement({
      htmlEl: "p",
      content: item,
      innerHTML: true,
    });
    hoursChildren.push(itemEl);
  }
  const hours = createElement({
    className: "hours",
    children: hoursChildren,
  });

  const footerGrid = createElement({
    className: "footerGrid",
    children: [address, footerLogo, hours],
  });

  const githubLink = document.createElement("a");
  githubLink.setAttribute(
    "href",
    "https://github.com/mathewbushuru/webpack-restaurant-SPA"
  );
  githubLink.setAttribute("target", "_blank");
  githubLink.className = "source";
  const imageIcon = Image(null, ghIconSrc, "Github Repo");
  imageIcon.setAttribute("width", "35px");
  githubLink.appendChild(imageIcon);

  const copySpan = createElement({
    htmlEl: "span",
    className: "copyright",
    content: "&copy; The Corruscant Cafe",
    innerHTML: true,
  });
  const bottomDivider = Image("invertDividerXY", dividerImgSrc, "");

  const copyrightSection = createElement({
    className: "bottomNav",
    children: [copySpan, bottomDivider],
  });

  const footerElement = createElement({
    className: "footer",
    children: [bottomNav, footerGrid, githubLink, copyrightSection],
  });

  return footerElement;
}
