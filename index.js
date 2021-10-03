const board = document.querySelector("#board");
const SQ_NUM = 1520;
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
};

for (let i = 0; i < SQ_NUM; i++) {
  const qs = document.createElement("div");
  qs.classList.add("square");
  qs.addEventListener("mouseover", (e) => {
    setColor(qs);
  });
  qs.addEventListener("mouseleave", (e) => {
    removeColor(qs);
  });
  board.append(qs);
}

function setColor(el) {
  el.style.backgroundColor = `${randomColor()}`;
  el.style.boxShadow = `0 0 2px ${randomColor()}, 0 0 10px ${randomColor()}`;
}
function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = "0 0 2px #1d1d1d";
}