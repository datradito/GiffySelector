const fromApiResponsetoGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const gifs = data.map((img) => {
      const { images, title, id } = img;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });
    return gifs;
  }
  return [];
};

export default function getGifs({
  limit = 5,
  keyword = "morty",
  page = 0,
} = {}) {
  console.log(keyword);
  const apiURL = `${process.env.REACT_APP_API_GIFFY}/search?api_key=${
    process.env.REACT_APP_KEY_GIFFY
  }&q=${keyword}&limit=${limit}&&offset=${page * limit}&rating=G&lang=en`;
  console.log("apiURL:", apiURL);
  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiResponsetoGifs);
}
