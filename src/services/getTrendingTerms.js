const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingTerms({ signal }) {
  const apiURL = `${process.env.REACT_APP_API_GIFFY}/trending/search?api_key=${process.env.REACT_APP_KEY_GIFFY}`;

  return fetch(apiURL, { signal })
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
