import './index.css';
import Logo from './assets/animelogo.jpg';

import displayAllAnime from './modules/displayAllAnime.js';
import popupComment from './modules/popupComment.js';
import Anime from './modules/Anime.js';

const anime = new Anime()

const headerLogo = document.getElementById('logo');
headerLogo.src = Logo;
displayAllAnime();
popupComment()

