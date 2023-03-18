import Anime from './Anime.js';

const displayAllAnime = () => {
  const anime = new Anime();
  anime.getAnimes()
    .then((data) => {
      anime.displayAnime(data);
    });
};
export default displayAllAnime;
