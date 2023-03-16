const commentCounter = () => {
  const counter = document.querySelectorAll('.comment').length; // this class should be assigned to single comments
  const displayCounter = document.querySelector('.comment-counter'); // insert this in the popups, on top of the comments
  if (count === 0) {
    displayCounter.textContent = 'No comments yet';
  } else {
    displayCounter.textContent = `${counter} comments`;
  }
};
commentCounter();