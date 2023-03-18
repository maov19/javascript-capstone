const titleCounter = (count) => {
  const counter = document.getElementById('counter');
  count = document.querySelectorAll('.card-container').length;

  if (count === 0) {
    count = 'No new titles';
  }
  if (count > 999) {
    count = '>999';
  }
  counter.innerText = count;

  return count;
};


export default titleCounter;