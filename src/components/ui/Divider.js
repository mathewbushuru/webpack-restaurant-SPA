import { createElement } from "../../utils";
import Image from "./Image";

import dividerImg from "../../images/divider.svg";

export default function Divider() {
  const leftImg = Image(null, dividerImg, "");
  const rightImg = Image("invertDivider", dividerImg, "");

  const dividerEl = createElement({
    className: "divider",
    children: [leftImg, rightImg],
  });

  return dividerEl;
}
