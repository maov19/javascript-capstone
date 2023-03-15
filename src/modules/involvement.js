// fix the posting method for this to work

class Involvement {
  constructor() {
    this.apiId = '123456';
    this.likesApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.apiId}/likes/`;
  }

    // get likes from involvement
    getLikes = async () => {
      const likes = await fetch(this.likesApi);
      const response = await likes.json();

      if (!likes.ok) return undefined;

      return response;
    };

    // post likes to involvement
    postLikes = async (id) => {
      await fetch(this.likesApi, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          item_id: id,
        }),
      });
    };

    // display likes on webpage, combined with base api
    displayLikes = () => {
      this.getLikes()
        .then((item) => {
          item.forEach((element) => {
            const like = document.getElementById('likes');
            if (like) {
              like.textContent = `${element.likes}`;
            }
          });
        });
    };
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

export default Involvement;
