// const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
// // const options = {
// //     method: 'GET',
// //     headers: {
// //         'X-RapidAPI-Key': 'b83e74a265msh99c0c3549f2cef1p1faec9jsn4e2edd539bb8',
// //         'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
// //     }
// // };

// // fetch(url, options)
// //     .then(response => response.json())
// //     .then(response => console.log(response))
// //     .catch(err => console.error(err));

// //     console.log(options);

// const display = async (url) => {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'b83e74a265msh99c0c3549f2cef1p1faec9jsn4e2edd539bb8',
//       'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
//     },
//   };
//   let result = '';

//   try {
//     const response = await fetch(url, options);
//     const data = await response.json();
//     result = data.result;
//   } catch (error) {
//     return;
//   }
//   console.log(data);
//   // const animeList = document.getElementById('anime-list');
//   // const singleAnimes = result.map((item) => `<li><p>${item}</p><p>${item}</p></li>`);
//   // animeList.innerHTML = singleAnimes.join('');
// };

// export default display;