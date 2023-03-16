const displayComments = (item_id, containerId) => {
    const comment = new Comment();
    comment
        .getComments(item_id)
        .then((comments) => {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            comments.forEach((comment) => {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `
          <p class="username">${comment.username}</p>
          <p class="comment-text">${comment.comment}</p>
        `;
                container.appendChild(commentDiv);
            });
        })
        .catch((error) => {
            console.error(error);
            window.alert('Failed to retrieve comments!');
        });
};

export default displayComments;