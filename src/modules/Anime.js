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
  }

  getAnimes() {
    return this.getShows()
      .then((shows) => shows.slice(50, 90))
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
          <div class="card-body items-center text-center flex">
            <div>
              <h2 class="card-title text-black font-lightbold text-3xl">${item.name}</h2>
            </div>
            <div class='flex items-center gap-4'>
            <span>Rating: ${item.rating.average}</span>
              <div class='grid grid-cols-1'>
                <i id="${item.id}" class="fa-solid fa-heart btn btn-secondary btn-sm  text-xl font-bold"></i> 
                <span id="likes-${item.id}" class="text-xl">0</span> 
              </div>
            </div>
            <button class="btn btn-primary commentBtn w-40" data-id="${item.id}">Comment</button>
            </div>
        </div>
    </div>
      `;
    });

    titleCounter();

    const commentButtons = document.querySelectorAll('.commentBtn');
    commentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const showId = button.dataset.id;
        const popupWindow = document.getElementById(`popupWindow${showId}`);
        this.getShowDetails(showId)
          .then((details) => {
            if (!popupWindow) {
              popupComment(details);
            } else {
              popupWindow.classList.remove('hidden');
            }
          })
      });
    });

    const likeButtons = document.querySelectorAll('.fa-heart');
    likeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        involve.postLikes(button.id)
          .then(() => involve.displayLikes())
      });
    });
    involve.displayLikes();
  }

  getShowDetails(showId) {
    return fetch(`${this.baseURL}/shows/${showId}`)
      .then((response) => response.json())
  }
}

export default Anime;
