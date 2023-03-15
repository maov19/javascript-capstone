import './index.css';
import Logo from './assets/animelogo.jpg';

import displayAllAnime from './modules/displayAllAnime.js';
import Involvement from './modules/involvement';

const headerLogo = document.getElementById('logo');
headerLogo.src = Logo;

displayAllAnime();
