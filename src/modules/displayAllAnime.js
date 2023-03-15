import Anime from './Anime.js';
import Involvement from './involvement.js';

const displayAllAnime = () => {
  const anime = new Anime();
  anime.getAnimes()
    .then((data) => anime.displayAnime(data))
    .catch((error) => console.error(error));
};

const displayLikes = () => {
  const likes = new Involvement ();
  likes.getLikes()
    .then((data) => anime.displayLikes(data))
    .catch((error) => console.error(error));
}

// this is the function im trying to post, but its not working properly
// async function postMethod(data) {
//   const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';

//   const response = await fetch(apiUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   const responseData = await response.json();
//   console.log(responseData);
// }

export default displayAllAnime;
