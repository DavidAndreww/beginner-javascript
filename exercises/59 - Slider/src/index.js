function Slider(slider) {
  // ensures whatever is passed in is an instance of elem and not another type
  if (!(slider instanceof Element)) {
    throw new Error("No slider passed in!");
  }

  // create variables for working with slider
  let current;
  let prev;
  let next;

  // select elements needed for the slider
  const slides = slider.querySelector(".slides");
  const prevBtn = slider.querySelector(".goToPrev");
  const nextBtn = slider.querySelector(".goToNext");
  
  function startSlider() {
      //current slide is based off of elem with class current, or first elem in node list
      current = slider.querySelector(".current") || slides.firstElementChild;
    // prev slide is equal to slide before 'current' slide, or the last elem in node list
    prev = current.previousElementSibling || slides.lastElementChild;
    // next slide is equal to slide after 'current' slide, or first elem in node list
    next = current.nextElementSibling || slides.firstElementChild;
}

function applyClasses() {
    // if 'current' slide doesn't already have class of 'current', add it
    if (!current.classList.contains("current")) {
        current.classList.add("current");
    }
    // add class of 'previous' to prev elem
    prev.classList.add("prev");
    //add class of 'next' to next elem
    next.classList.add("next");
    // next.classList.
}

function moveSlide(direction) {
    // remove all classes from currently selected slides
    const classesToRemove = ["prev", "current", "next"];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    //updates variables to correct divs and re-applies classes depending on button clicked
    if (direction === "next") {
        [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild]
        // prev = current;
        // current = next;
        // next = next.nextElementSibling || slides.firstElementChild;
        applyClasses();
    } else {
        [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current]
        // next = current;
        // current = prev;
        // prev = prev.previousElementSibling || slides.lastElementChild;
        applyClasses();
    }
}

// when this slider is created, run the start slider function
startSlider();
applyClasses();

// event listeners
prevBtn.addEventListener("click", moveSlide);
nextBtn.addEventListener("click", () => moveSlide("next"));
}

const mySlider = Slider(document.querySelector(".slider"));
const myDogSlider = Slider(document.querySelector(".dog-slider"));
