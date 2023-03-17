import Comment from './Comment.js';

const addComments = (itemId) => {
  const commentForm = document.getElementById('commentForm');
  const inputName = document.getElementById('inputName');
  const inputComment = document.getElementById('inputComment');

  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = new Comment();
    comment.postComment(itemId, inputName.value, inputComment.value)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

export default addComments;
