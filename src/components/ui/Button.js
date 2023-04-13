export default function Button( name ) {
  const element = document.createElement("btn");
  element.className = "btn";
  element.textContent = name;
  return element
}
