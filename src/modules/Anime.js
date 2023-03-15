

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
        <div class="card w-96 bg-dark-100 shadow-xl flex justify-between">
          <figure class="px-10 pt-10">
            <img id="avatar" alt="no internet" class="rounded-xl" src="${item.image.medium}" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-white font-semibold text-3xl">${item.name}</h2>
            <span>Rating: ${item.rating.average}</span>
            <div class="card-actions commentButton">
              <button class="btn btn-primary commentBtn" data-id="${item.id}">Comment</button>
              <i class="fa-solid fa-heart btn btn-secondary text-2xl font-bold"></i> 
              <span class="text-4xl">1</span> 
            </div>
          </div>
        </div>
      `;
    });

    // Add event listener to comment buttons
    const commentButtons = document.querySelectorAll('.commentBtn');
    const popupWindow = document.getElementById('popupWindow')
    const closeWindow = document.querySelector('closeWindow')
    commentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        popupWindow.classList.remove('hidden')
        closeWindow.classList.add('hidden')
        const showId = button.dataset.id;
        this.getShowDetails(showId)
          .then((details) => {

            console.log(details);
          })
          .catch((error) => console.error(error));
      });
    });
  }

  getShowDetails(showId) {
    return fetch(`${this.baseURL}/shows/${showId}`)
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}

export default Anime;
