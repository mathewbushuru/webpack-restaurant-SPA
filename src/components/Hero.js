import { createElement } from "../utils";
import Image from "./ui/Image";

import ImgSrc1 from "../images/new/meal2.png";
import ImgSrc2 from "../images/new/meals.png";
import ImgSrc3 from "../images/new/droid3.png";
// import ImgSrc1 from "../images/hero1.jpg";
// import ImgSrc2 from "../images/hero2.jpg";
// import ImgSrc3 from "../images/hero3.jpg";

export default function Hero() {
  const HeroImg1 = Image(
    "heroImg1",
    ImgSrc1,
    "restaurant image"
  );
  const HeroImg2 = Image(
    "heroImg2",
    ImgSrc2,
    "restaurant image"
  );
  const HeroImg3 = Image(
    "heroImg3",
    ImgSrc3,
    "restaurant image"
  );

  const heroEl = createElement({
    htmlEl: "div",
    className: "heroWrapper",
    children: [HeroImg1, HeroImg2, HeroImg3],
  });

  return heroEl;
}
