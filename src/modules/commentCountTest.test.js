/**
 * @jest-environment jsdom
 */

const commentCounter = () => {
  let counter = document.querySelectorAll('.comment').length; // this class should be assigned to single comments
  const displayCounter = document.querySelector('.comment-counter'); // insert this in the popups, on top of the comments
  if (counter === 0) {
    counter = 'No comments yet';
  } else {
    counter = `${counter} comments`;
  }
  return counter;
};

describe('Counting comments test', () => {
  test('counts with 0 items displayed', () => {
    document.body.innerHTML = "<li class='comment'></li>".repeat(0);
    expect(commentCounter()).toBe('No comments yet');
  });

  test('counts with 3 items displayed', () => {
    document.body.innerHTML = "<li class='comment'></li>".repeat(3);
    expect(commentCounter()).toBe('3 comments');
  });

  test('counts with 100 items displayed', () => {
    document.body.innerHTML = "<li class='comment'></li>".repeat(100);
    expect(commentCounter()).toBe('100 comments');
  });
});
