window.addEventListener("scroll", function () {
  const header = document.querySelector(".black-row");
  if (window.scrollY > 70) {
    header.classList.add("fixed");
  } else if (window.scrollY < 50) {
    header.classList.remove("fixed");
  }
});
