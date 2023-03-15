import Anime from './Anime.js';

const displayAllAnime = () => {
  const anime = new Anime();
  anime.getAnimes()
    .then((data) => anime.displayAnime(data))
    .catch((error) => console.error(error));
};
export default displayAllAnime;
