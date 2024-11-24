document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".mobile-menu");
  const inputCheckbox = document.querySelector("#check");
  const mobileNavbar = document.querySelector(".mobile-navbar");

  // Отслеживаем изменения состояния чекбокса
  inputCheckbox.addEventListener("change", () => {
    if (inputCheckbox.checked) {
      menuButton.classList.add("active");
      mobileNavbar.style.display = "block";
    } else {
      menuButton.classList.remove("active");
      mobileNavbar.style.display = "none";
    }
  });
});
