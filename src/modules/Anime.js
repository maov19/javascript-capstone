import Involvement from "./involvement.js";
import titleCounter from "../titles-counter.js";
const involve = new Involvement();

class Anime {
  constructor() {
    this.baseURL = 'https://api.tvmaze.com';
  }

//get animes from api
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
              <div class="card-container">
                <div id="${item.id}"  class="card w-96 bg-dark-100 shadow-xl flex justify-between">
                    <figure class="px-10 pt-10">
                        <img id="avatar" alt="no internet" class="rounded-xl" src="${item.image.original}" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white font-semibold text-3xl">${item.name}</h2>
                        <span>Ranking ${item.id}</span>
                        <div class="card-actions">
                            <button class="btn btn-primary" id="comment_${item.id}">Comment</button>
                            <i  class="fa-solid fa-heart btn btn-secondary text-2xl font-bold" id="like-button_${item.id}"></i> <span class="text-4xl" id="likes_${item.id}"></span> 
                        </div>
                    </div>
                </div>
              </div>
            `;
    titleCounter()
    const card = document.getElementById(item.id);
    card.addEventListener('click', (event) => {
      if (event.target.id === `like-button_${item.id}`) {
        involve.postLikes(event.target.id)
          .then(() => {
          involve.displayLikes();
        })
          .catch(() => {
          event.target.style.color = 'red'
        });
      } 
    }) 
  });
    involve.displayLikes();
  }
}

export default Anime;
