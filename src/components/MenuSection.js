import { createElement } from "../utils";
import Image from "./ui/Image";
import Button from "./ui/Button";

import bakeImgSrc from "../images/baking.jpeg"

export default function MenuSection() {
  const bakeImg = Image(null, bakeImgSrc, "");

  const menuBtn = Button("Menus")

  const menuElement = createElement({
    className: "menuSection",
    children: [bakeImg, menuBtn],
  });

  return menuElement
}
