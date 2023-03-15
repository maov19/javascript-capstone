//fix the posting method first

class Involvement {
  constructor() {
    this.apiId = '123456';

    this.likesApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiId}/likes/`;
  }

    //get likes from involvement
    getLikes = async () => {
      const likes = await fetch(likesApi);
      const response = await likes.json();

      if (!likes.ok) return undefined;

      return response;
    };

    //post likes to involvement
    postLikes = async (id) => {
      await fetch(likesApi, {
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

    //display likes on webpage, combined with base api
    displayLikes = () => {
    const list = document.querySelector('.display-container');
      getLikes().then((item) => {
        item.forEach((element) => {
          const like = document.getElementById('likes');
          if (like) {
            like.textContent = `${element.likes}`;
          }
        });
      });
    };
}

