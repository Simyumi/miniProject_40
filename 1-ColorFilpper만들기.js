const colors = [
  "red",
  "pink",
  "orange",
  "blue",
  "skyblue",
  "salmon",
  "aqua",
  "beige",
  "peru",
  "plum",
  "purple",
  "oliveoldlace",
  "orchid",
  "yellowgreen",
  "thistle",
  "tomato",
  "turquoise",
  "whitesmoke",
  "forestgreen",
];
console.log("ji");
const background = document.querySelector(".container");
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  background.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
  color.style.color = colors[randomColor];
  console.log("hi");
});
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
