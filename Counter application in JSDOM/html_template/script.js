// get the html element by the id
const counter = document.getElementById("counterShow");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

// initial  counter value
let counterContent = 0;

// add a EventListener to the button
increment.addEventListener("click", () => {
  counterContent++;
  counter.innerText = counterContent;
});
decrement.addEventListener("click", () => {
  counterContent <= 0 ? 0 : counterContent--;
  counter.innerText = counterContent;
});

// set the update value to the counter
