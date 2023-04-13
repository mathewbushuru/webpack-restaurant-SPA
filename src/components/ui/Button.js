export default function Button(name, secondary = false) {
  const element = document.createElement("btn");
  element.className = secondary ? "btn btnSecondary" : "btn";
  element.textContent = name;
  return element;
}
