
import addComments from './addComments.js'

const popupComment = (movieDetails) => {
  const main = document.getElementById('main');

  const mainContainer = document.createElement('div');
  mainContainer.className = 'fixed top-0 left-0 flex items-center justify-center hidden w-full h-screen bg-black bg-opacity-50';
  mainContainer.id = 'popupWindow';
  main.appendChild(mainContainer);

  const container = document.createElement('div');
  container.className = 'w-3/4 px-16 pt-5 bg-white rounded shadow-xl';
  mainContainer.appendChild(container);

  const closeDiv = document.createElement('div');
  closeDiv.className = 'flex justify-end';
  const close = document.createElement('button');
  close.className = 'text-4xl font-bold closeWindow';
  close.innerHTML = '&cross;';
  close.id = 'closeBtn';
  container.appendChild(closeDiv);
  closeDiv.appendChild(close);

  const movieDiv = document.createElement('div');
  movieDiv.className = 'flex justify-center';
  const movieImg = document.createElement('img');
  movieImg.src = movieDetails.image.medium;
  movieImg.alt = movieDetails.name;
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

  const genre = document.createElement('span');
  genre.innerHTML = `Genre: <b class="text-sm"> ${movieDetails.genres}</b>`;
  movieObjDiv.appendChild(genre);
  const rating = document.createElement('span');
  rating.innerHTML = ` Average rating: <b>${movieDetails.rating.average}</b>`;
  movieObjDiv.appendChild(rating);
  const language = document.createElement('span');
  language.innerHTML = ` Language: <b>${movieDetails.language}</b>`;
  movieObjDiv.appendChild(language);
  const premiered = document.createElement('span');
  premiered.innerHTML = ` Premiered: <b>${movieDetails.premiered}</b>`;
  movieObjDiv.appendChild(premiered);

  const description = document.createElement('div');
  description.className = 'w-1/2 text-sm border-t';
  description.innerHTML = movieDetails.summary;
  container.appendChild(description);

  const commentContainer = document.createElement('div');
  container.appendChild(commentContainer);

  const commentForm = document.createElement('form');
  commentForm.className = 'grid grid-rows-1';
  commentForm.id = 'commentForm'
  const inputName = document.createElement('input');
  inputName.id = 'inputName'
  inputName.className = 'px-3 border-2 border-black input input-primary placeholder:text-black';
  inputName.placeholder = 'Your name';
  const inputComment = document.createElement('textarea');
  inputComment.id = 'inputComment'
  inputComment.className = 'textarea te4xtarea-primary';
  inputComment.placeholder = 'Your name';
  const addButton = document.createElement('button');
  addButton.type = 'submit'
  addButton.className = 'px-3 py-1 btn btn-sm btn-success ';
  addButton.innerText = 'Comment';
  container.appendChild(commentForm);
  commentForm.appendChild(inputName);
  commentForm.appendChild(inputComment);
  commentForm.appendChild(addButton);



  const popupWindow = document.getElementById('popupWindow');
  popupWindow.classList.remove('hidden');
  const closeBtn = document.getElementById('closeBtn');
  closeBtn.addEventListener('click', () => {
    if (popupWindow) { popupWindow.classList.add('hidden'); }
  });
  addComments()
};

export default popupComment;