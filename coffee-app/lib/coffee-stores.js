//initialize unsplash
import { createApi } from "unsplash-js";

const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

const getListOfCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: "coffee shop",
    perPage: 30,
    // page: 1,
    // color: "green",
    // orientation: "portrait",
  });

  const unsplashResults = photos.response.results;
  // console.log("###############");
  // console.log({ unsplashResults });
  return unsplashResults.map((result) => result.urls["small"]);
};

export const fetchCoffeeStores = async () => {
  const photos = await getListOfCoffeeStorePhotos();
  // console.log({ photos });

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOURSQUARE_API_KEY,
    },
  };

  const response = await fetch(
    getUrlForCoffeeStores(
      "43.653833032607096%2C-79.37896808855945",
      "coffee",
      6
    ),
    options
  );
  const data = await response.json();
  // return data.results;

  const dataResult = data.results.map((result, idx) => {
    const neighborhood = result.location.locality;
    return {
      id: result.fsq_id,
      address: result.location.address,
      name: result.name,
      neighbourhood: neighborhood,
      imgUrl: photos.length > 0 ? photos[idx] : null,
    };
  });

  // console.log("###############");
  // console.log(dataResult);
  return dataResult;
};
