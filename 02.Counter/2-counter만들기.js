const count = document.querySelector(".count_num");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

decrease.addEventListener("click", function () {
  let num = Number(count.textContent);
  num = num - 1;
  count.textContent = num;
  colorChange();
});
increase.addEventListener("click", function () {
  let num = Number(count.textContent);
  num = num + 1;
  count.textContent = num;
  colorChange();
});
reset.addEventListener("click", function () {
  let num = Number(count.textContent);
  num = 0;
  count.textContent = num;
  colorChange();
});

function colorChange() {
  if (Number(count.textContent) < 0) {
    count.style.color = "salmon";
  } else if (Number(count.textContent) == 0) {
    count.style.color = "#333";
  } else if (Number(count.textContent) > 0) {
    count.style.color = "yellowgreen";
  }
}
