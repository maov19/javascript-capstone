import './index.css';
import Logo from './assets/animelogo.jpg';
import displayAllAnime from './modules/displayAllAnime.js';

const headerLogo = document.getElementById('logo');
headerLogo.src = Logo;
displayAllAnime();