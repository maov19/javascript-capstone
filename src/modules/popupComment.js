import addComments from './addComments.js';
import Comment from './Comment.js';

const popupComment = (movieDetails) => {
  const main = document.getElementById('main');
  const body = document.querySelector('body');
  body.classList.add('popup-open');
  const style = document.createElement('style');
  style.innerHTML = `
    .popup-open .popup-modal {
      overflow-y: auto;
    }
  `;
  document.head.appendChild(style);

  const mainContainer = document.createElement('div');
  mainContainer.className = 'fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black bg-opacity-50';
  mainContainer.id = `popupWindow${movieDetails.id}`;
  mainContainer.classList.add('popup-open');
  main.appendChild(mainContainer);
  mainContainer.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'w-1/2 h-screen px-16 py-16 bg-white rounded shadow-xl md:w-3/4';
  container.style.overflowY = 'auto';
  mainContainer.appendChild(container);

  const closeDiv = document.createElement('div');
  closeDiv.className = 'flex justify-end';
  const close = document.createElement('button');
  close.className = 'text-4xl font-bold closeWindow';
  close.innerHTML = '&cross;';
  close.id = `closeBtn${movieDetails.id}`;
  container.appendChild(closeDiv);
  closeDiv.appendChild(close);

  const movieDiv = document.createElement('div');
  movieDiv.className = 'grid justify-center grid-rows-1';
  const movieImg = document.createElement('img');
  movieImg.src = movieDetails.image.medium;
  movieImg.alt = movieDetails.name;
  movieImg.id = 'movieImg'
  movieDiv.appendChild(movieImg);
  container.appendChild(movieDiv);

  const popupTitle = document.createElement('div');
  const title = document.createElement('h2');
  title.innerText = movieDetails.name;
  title.className = 'text-3xl font-semibold text-center text-black';
  popupTitle.className = 'px-4 py-2 border-b';
  container.appendChild(popupTitle);
  popupTitle.appendChild(title);

  const movieObjDiv = document.createElement('div');
  container.appendChild(movieObjDiv);
  movieObjDiv.className = 'grid grid-cols-2 text-center';

  const genre = document.createElement('span');
  genre.innerHTML = `<b>Genre: </b>${movieDetails.genres}`;
  movieObjDiv.appendChild(genre);
  const rating = document.createElement('span');
  rating.innerHTML = `<b>Rating: </b>${movieDetails.rating.average}`;
  movieObjDiv.appendChild(rating);
  const language = document.createElement('span');
  language.innerHTML = `<b>Language: </b>${movieDetails.language}`;
  movieObjDiv.appendChild(language);
  const premiered = document.createElement('span');
  premiered.innerHTML = `<b>Language: </b>${movieDetails.premiered}`;
  movieObjDiv.appendChild(premiered);

  const description = document.createElement('div');
  description.className = 'py-1 text-sm border-t border-b';
  description.innerHTML = movieDetails.summary;
  container.appendChild(description);

  const commentContainer = document.createElement('div');
  commentContainer.id = `commentContainer${movieDetails.id}`;
  commentContainer.className = 'flex justify-center my-2 border-b';
  container.appendChild(commentContainer);

  const commentForm = document.createElement('form');
  commentForm.className = '';
  commentForm.id = `commentForm${movieDetails.id}`;
  const inputName = document.createElement('input');
  inputName.id = 'inputName';
  inputName.className = 'text-xl border border-black input placeholder:text-black';
  inputName.placeholder = 'Your name';
  const inputComment = document.createElement('textarea');
  inputComment.id = 'inputComment';
  inputComment.className = 'text-xl border border-black textarea placeholder:text-black';
  inputComment.placeholder = 'Your insights...';
  const addButton = document.createElement('button');
  addButton.type = 'submit';
  addButton.className = 'px-3 py-1 btn btn-sm btn-success ';
  addButton.innerText = 'Comment';
  container.appendChild(commentForm);
  commentForm.appendChild(inputName);
  commentForm.appendChild(inputComment);
  commentForm.appendChild(addButton);

  const closeBtn = document.getElementById(`closeBtn${movieDetails.id}`);
  closeBtn.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    mainContainer.classList.remove('popup-open');
    body.classList.remove('popup-open');
    document.head.removeChild(style);
  });

  addComments(movieDetails.id);
  const comment = new Comment();
  comment.displayComments(movieDetails.id);
};

export default popupComment;