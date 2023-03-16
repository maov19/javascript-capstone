import Comment from "./Comment.js";

const addComments = () => {
    const commentForm = document.getElementById('commentForm');
    const inputName = document.getElementById('inputName');
    const inputComment = document.getElementById('inputComment');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log(inputComment.value)
        console.log(inputName.value)

        const comment = new Comment();
        comment.postComment(inputName.value, inputComment.value)
            .then((response) => {
                console.log(response);
                window.alert('Comment added successfully!');
            })
            .catch((error) => {
                console.error(error);
                window.alert('Failed to add comment!');
            });
    });
};

export default addComments;
