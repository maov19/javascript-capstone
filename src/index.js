import './index.css';
import Logo from './assets/animelogo.jpg';

import displayAllAnime from './modules/displayAllAnime.js';


const headerLogo = document.getElementById('logo');
headerLogo.src = Logo;


displayAllAnime();
import Comment from './modules/Comment.js';
const comment = new Comment()
comment.postComment('1', "Jane", "Hello")
