import popupComment from './popupComment.js';
import titleCounter from './title-counter.js';
import Involvement from './involvement.js';

const involve = new Involvement();

class Anime {
  constructor() {
    this.baseURL = 'https://api.tvmaze.com';
  }

  getShows() {
    return fetch(`${this.baseURL}/shows`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  getAnimes() {
    return this.getShows()
      .then((shows) => shows.slice(50, 90))
      .catch((error) => console.error(error));
  }

  displayAnime = (items) => {
    const results = document.getElementById('display-container');
    results.innerHTML = '';
    if (items.length === 0) return;
    items.forEach((item) => {
      results.innerHTML += `
      <div class='card-container'>
        <div class="card w-96 bg-dark-100 shadow-xl flex justify-between">
          <figure class="px-10 pt-10">
            <img id="avatar" alt="no internet" class="rounded-xl" src="${item.image.medium}" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-black font-semibold text-3xl">${item.name}</h2>
            <span>Rating: ${item.rating.average}</span>
            <div class="card-actions commentButton">
              <button class="btn btn-primary commentBtn" data-id="${item.id}">Comment</button>
              <i id="${item.id}" class="fa-solid fa-heart btn btn-secondary text-2xl font-bold"></i> 
              <span id="likes-${item.id}" class="text-4xl"></span> 
            </div>
          </div>
        </div>
    </div>
      `;
    });

    titleCounter();

    const commentButtons = document.querySelectorAll('.commentBtn');
    const popupWindow = document.getElementById('popupWindow');
    commentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const showId = button.dataset.id;
        this.getShowDetails(showId)
          .then((details) => {
            console.log(details);
            popupComment(details);
            if (popupWindow) { popupWindow.classList.remove('hidden'); }
          })
          .catch((error) => console.error(error));
      });
    });

    const likeButtons = document.querySelectorAll('.fa-heart');
    likeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // console.log(button.id);
        involve.postLikes(button.id);
        // .then(() => button.style.color = 'red');
        involve.displayLikes();
        // .catch(() => button.style.color = 'red')
        // POST a like to the api item.id
        // GET the api info and display it on main
      });
    });
    involve.displayLikes();
  }

  getShowDetails(showId) {
    return fetch(`${this.baseURL}/shows/${showId}`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}

export default Anime;
