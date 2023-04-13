import { createElement } from "../utils";
import Button from "./ui/Button";

export default function HeroReview() {
  const pEl = createElement({
    htmlEl: "p",
    innerHTML: true,
    content:
      " \"Countless motives exist for indulging in the culinary arts of the galaxy – to convene with allies, to display one's power, or to commemorate momentous occasions – but at the core, it is the necessity to satisfy one's hunger, and none can satiate quite like The Coruscant Cafe.\" <br /><br /> - EMPEROR Palpatine ",
  });

  const reserveBtn = Button("Reserve");

  const heroReviewElement = createElement({
    htmlEl: "div",
    className: "heroReview",
    children: [pEl, reserveBtn],
  });

  return heroReviewElement;
}
