import Comment from './Comment.js';

const addComments = (itemId) => {
  const commentForm = document.getElementById(`commentForm${itemId}`);
  
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = new Comment();
    if (commentForm.inputName.value.length !== 0 && commentForm.inputComment.value.length) {
      comment.postComment(itemId, commentForm.inputName.value, commentForm.inputComment.value)
        .then((response) => {
          console.log(response);
          comment.displayComments(itemId);
        })
        .catch((error) => {
          console.error(error);
        });
      commentForm.reset();
    }
  });
};

export default addComments;
