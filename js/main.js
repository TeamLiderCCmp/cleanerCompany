// Makeshift carousel function that gets invoked with the Index to start it off, then the callback increments the index to recursively invoke the same function. Works even in IE11!
var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
  timer = setTimeout(function () {
    var evt;
    if (document.createEvent) {
      //If browser = IE, then polyfill
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
      //If Browser = modern, then create new MouseEvent
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
    index++; // Increment the index
    if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
    }
    cycleTestimonials(index); // recursively call `cycleTestimonials()`
    document
      .querySelector(".testimonials")
      .addEventListener("click", function () {
        clearTimeout(timer); //stop the carousel when someone clicks on the div
      });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);
