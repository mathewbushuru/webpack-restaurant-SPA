export default function Image(imgClass , imgSrc, imgAlt ) {
  const imageEl = document.createElement("img");

  imageEl.className = imgClass;
  imageEl.setAttribute("src", imgSrc);
  imageEl.setAttribute("alt", imgAlt);

  return imageEl;
}
