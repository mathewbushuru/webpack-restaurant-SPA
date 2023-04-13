import { createElement } from "../utils";
import Image from "./ui/Image";

export default function Hero() {

  const HeroImg1 = Image(
    "heroImg1",
    "/src/images/hero1.jpg",
    "restaurant image"
  );
  const HeroImg2 = Image(
    "heroImg2",
    "/src/images/hero2.jpg",
    "restaurant image"
  );
  const HeroImg3 = Image(
    "heroImg3",
    "/src/images/hero3.jpg",
    "restaurant image"
  );

  const heroEl = createElement({
    htmlEl: "div",
    className: "heroWrapper",
    children: [HeroImg1, HeroImg2,HeroImg3],
  });

  return heroEl;
}
