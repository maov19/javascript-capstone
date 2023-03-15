const counter = document.getElementById('counter');

const titleCounter = (count) => {
  count = document.querySelectorAll(".card-container").length;
  if (count === 0) {
    return "No new titles"
  }
  if (count > 999) {
    return ">999"
  }
  counter.innerText = count;
};

export default titleCounter;