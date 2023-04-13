export function createElement({
  htmlEl = "div",
  className = null,
  content = null,
  children = [],
}) {
  const element = document.createElement(htmlEl);

  element.className = className;
  element.textContent = content;

  for (let child of children) {
    element.appendChild(child);
  }

  return element;
}
