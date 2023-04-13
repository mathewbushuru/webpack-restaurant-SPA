import { createElement } from "../utils";
import Button from "./ui/Button";

export default function ParallaxSection1() {
  const reserveBtn = Button("reserve", true);

  const parallaxContent = createElement({
    className: "parallaxContent",
    children: [reserveBtn],
  });

  const parallaxElement = createElement({
    className: "parallaxSection",
    children: [parallaxContent],
  });

  return parallaxElement;
}
