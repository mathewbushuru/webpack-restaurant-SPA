export function createElement({
  htmlEl = "div",
  className = null,
  content = null,
  children = [],
  innerHTML = false,
}) {
  const element = document.createElement(htmlEl);

  element.className = className;
  if (innerHTML) {
    element.innerHTML = content;
  } else {
    element.textContent = content;
  }

  for (let child of children) {
    element.appendChild(child);
  }

  return element;
}
