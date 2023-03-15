const switchPopup = () => {
    const commentButtons = document.querySelectorAll('.commentBtn');

    commentButtons.forEach((button) => {
        button.addEventListener('click', () => {
            window.alert('working');
        });
    });
}
export default switchPopup