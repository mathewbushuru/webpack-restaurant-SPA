import { createElement } from "../../utils";

export default function Input(
  type = "text",
  name = "",
  id = "",
  placeholder = ""
) {
  const inputElement = document.createElement("input");

  inputElement.setAttribute("type", type);
  inputElement.setAttribute("name", name);
  inputElement.setAttribute("id", id);
  inputElement.setAttribute("placeholder", placeholder);

  return inputElement;
}
