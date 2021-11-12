// (1) Tabes 1111111111111111111111111111
let tabes = document.querySelectorAll(".tabes li");
let content = document.querySelectorAll(".content div");
function changeState(id) {
  tabes.forEach((el) => {
    el.id === id ? el.classList.add("active") : el.classList.remove("active");
  });
  content.forEach((el) => {
    el.dataset.id === id
      ? (el.style.display = "block")
      : (el.style.display = "none");
  });
}
// (3) Scrolling To Top 33333333333333333
let scrolling = document.querySelector(".up");
window.onscroll = function () {
  window.scrollY >= 50
    ? (scrolling.style.right = "20px")
    : (scrolling.style.right = "-50px");
};
scrolling.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
