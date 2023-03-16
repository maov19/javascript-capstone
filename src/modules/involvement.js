class Involvement {
  constructor() {
    this.apiId = 'VASVN7B36M4wHn663o4j';
    this.likesApi = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.apiId}/likes/`;
  }

    // get likes from involvement
    getLikes = async () => {
      const likes = await fetch(this.likesApi);
      const response = await likes.json();

      if (!likes.ok) return 'hello';

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
            const likes = document.getElementById(`likes-${element.item_id}`);
            if (likes) {
              likes.textContent = `${element.likes}`;
            }
          });
        });
    };
}

export default Involvement;
