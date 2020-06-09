const getGifs = async ({ keyword } = {}) => {
  const apiURL = `${process.env.REACT_APP_API_GIFFY}/search?api_key=${process.env.REACT_APP_KEY_GIFFY}&q=${keyword}&limit=15&&offset=0&rating=G&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((res) => {
      const { data = [] } = res;
      if (Array.isArray(data)) {
        const gifs = data.map((img) => {
          const { images, title, id } = img;
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        console.log(gifs);
        return gifs;
      }
    });
};

export default getGifs;
