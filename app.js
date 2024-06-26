/* Created by Tivotal */

let divElem = document.querySelector(".div");

let animateDiv = (e) => {
  let x = e.pageX;
  let y = e.pageY;

  divElem.style.left = x - 10 + "px";
  divElem.style.top = y - 10 + "px";
};

window.addEventListener("mousemove", animateDiv);
