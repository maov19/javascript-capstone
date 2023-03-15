class Anime {
    constructor() {
        this.baseURL = 'https://api.tvmaze.com';
    }

    getShows() {
        return fetch(`${this.baseURL}/shows`)
            .then(response => response.json())
            .catch(error => console.error(error));
    }

    getAnimes() {
        return this.getShows()
            .then(shows => shows.slice(50, 90))
            .catch(error => console.error(error));
    }

    displayAnime(items) {
        let results = document.getElementById('display-container');
        results.innerHTML = '';
        if (items.length === 0) return;
        items.forEach(item => {
            results.innerHTML += `
                <div class="card w-96 bg-dark-100 shadow-xl flex justify-between">
                    <figure class="px-10 pt-10">
                        <img id="avatar" alt="no internet" class="rounded-xl" src="${item.image.original}" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title text-white font-semibold text-3xl">${item.name}</h2>
                        <span>${item.rating}</span>
                        <div class="card-actions">
                            <button class="btn btn-primary">Comment</button>
                            <i  class="fa-solid fa-heart btn btn-secondary text-2xl font-bold"></i> <span class="text-4xl">1</span> 
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

export default Anime;
