document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".carousel .item");
  var dots = document.querySelectorAll(".carousel-indicators li");
  var currentItem = 0;
  var isEnabled = true;

  function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
  }

  function nextItem(n) {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
  }

  function previousItem(n) {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
  }

  function goToItem(n) {
    if (n < currentItem) {
      hideItem("to-right");
      currentItem = n;
      showItem("from-left");
    } else {
      hideItem("to-left");
      currentItem = n;
      showItem("from-right");
    }
  }

  function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    dots[currentItem].classList.remove("active");
    items[currentItem].addEventListener("animationend", function () {
      this.classList.remove("active", direction);
    });
  }

  function showItem(direction) {
    items[currentItem].classList.add("next", direction);
    dots[currentItem].classList.add("active");
    items[currentItem].addEventListener("animationend", function () {
      this.classList.remove("next", direction);
      this.classList.add("active");
      isEnabled = true;
    });
  }

  document
    .querySelector(".carousel-control.left")
    .addEventListener("click", function () {
      if (isEnabled) {
        previousItem(currentItem);
      }
    });

  document
    .querySelector(".carousel-control.right")
    .addEventListener("click", function () {
      if (isEnabled) {
        nextItem(currentItem);
      }
    });

  document
    .querySelector(".carousel-indicators")
    .addEventListener("click", function (e) {
      var target = [].slice
        .call(e.target.parentNode.children)
        .indexOf(e.target);
      if (target !== currentItem && target < dots.length) {
        goToItem(target);
      }
    });
});
