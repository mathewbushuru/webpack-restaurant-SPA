import { createElement } from "../utils";
import Image from "./ui/Image";
import Input from "./ui/Input";
import Button from "./ui/Button";

import wineImgSrc from "../images/wine.jpg";

export default function NewsletterSection() {
  const wineImg = Image(null, wineImgSrc, "wine");

  const h2El = createElement({
    htmlEl: "h2",
    content: "Updates from the kitchen",
  });
  const pEl = createElement({
    htmlEl: "p",
    content: "Receive news and updates from our collection of restaurants.",
  });

  const firstNameInp = Input("text", null, null, "first name");
  const lastNameInp = Input("text", null, null, "last name");

  const formNames = createElement({
    className: "formNames",
    children: [firstNameInp, lastNameInp],
  });

  const emailInp = Input("email", null, null, "email");
  const signUpBtn = Button("Sign up");

  const newsletterForm = createElement({
    className: "newsletterForm",
    children: [h2El, pEl, formNames, emailInp, signUpBtn],
  });

  const newsletterElement = createElement({
    className: "newsletterSection",
    children: [wineImg, newsletterForm],
  });

  return newsletterElement;
}
