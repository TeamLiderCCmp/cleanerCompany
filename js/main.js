var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
  timer = setTimeout(function () {
    var evt;
    if (document.createEvent) {
      evt = document.createEvent("MouseEvent");
      evt.initMouseEvent(
        "click",
        true,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
    } else {
      evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
      });
    }
    var ele = "." + testimonialItems[index].className;
    var ele2 = document.querySelector(ele);
    ele2.dispatchEvent(evt);
    index++;
    if (index >= testimonialItems.length) {
      index = 0;
    }
    cycleTestimonials(index);
    document
      .querySelector(".testimonials")
      .addEventListener("click", function () {
        clearTimeout(timer);
      });
  }, 3500);
}
cycleTestimonials(0);
