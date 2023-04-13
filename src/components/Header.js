import { createElement } from "../utils";
import { Router } from "..";
import Button from "./ui/Button";

const navItems = [
  { name: "About", link: "about" },
  { name: "Menu", link: "menu" },
  { name: "Gift Cards", link: "gift" },
  { name: "Career", link: "career" },
  { name: "Contact", link: "contact" },
];

export default function Header() {
  // logo
  const logoEl = createElement({
    htmlEl: "h2",
    className: "logo",
    content: "The Coruscant Cafe",
  });
  logoEl.onclick = () => Router("home");

  // right nav
  let navItemsElChildren = [];
  for (let el of navItems) {
    const navItem = document.createElement("li");
    navItem.textContent = el.name;
    navItem.onclick = () => Router(el.link);
    navItemsElChildren.push(navItem);
  }

  const navItemsEl = createElement({
    htmlEl: "ul",
    className: "navItems",
    content: null,
    children: navItemsElChildren,
  });

  const orderBtn = Button("Order");
  const reserveBtn = Button("Reserve");

  const navBtnsEl = createElement({
    htmlEl: "div",
    className: "navBtnGroup",
    content: null,
    children: [orderBtn, reserveBtn],
  });

  const rightNavEl = createElement({
    htmlEl: "div",
    className: "navRight",
    content: null,
    children: [navItemsEl, navBtnsEl],
  });

  const headerElement = createElement({
    htmlEl: "nav",
    children: [logoEl, rightNavEl],
  });

  return headerElement;
}
