const counter = document.getElementById('counter');

const titleCounter = (count) => {
  count = document.querySelectorAll(".card-container").length;
  if (count === 0) {
    count = "No new titles"
  }
  if (count > 999) {
    count = ">999"
  }
  counter.innerText = count;
};

export default titleCounter;