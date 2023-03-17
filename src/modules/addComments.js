import Comment from './Comment.js';

const addComments = (itemId) => {
  const commentForm = document.getElementById('commentForm');
  const inputName = document.getElementById('inputName');
  const inputComment = document.getElementById('inputComment');

  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const comment = new Comment();
    if (inputName.value.length !== 0 && inputComment.value.length) {
      comment.postComment(itemId, inputName.value, inputComment.value)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      await comment.displayComments(movieDetails.id);
      inputName.value = ''
      inputComment.value = ''
    }
  });
};

export default addComments;
