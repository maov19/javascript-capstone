import _ from 'lodash';
import './style.css';


  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b83e74a265msh99c0c3549f2cef1p1faec9jsn4e2edd539bb8',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    console.log(options[0])