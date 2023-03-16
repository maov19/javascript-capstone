const commentCounter = () => {
    let counter = document.querySelectorAll('.comment').length //this class should be assigned to single comments
    let displayCounter = document.querySelector('.comment-counter') //insert this in the popups, on top of the comments
    if (!comment) {
        displayCounter.textContent = 'No comments yet'
    } else {
        displayCounter.textContent = `${counter} comments`
    }
}