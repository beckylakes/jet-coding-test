"use server";

export async function getRestaurants(postcode) {
  return fetch(
    `http://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`
  )
    .then((response) => response.json())
    .then(({ restaurants }) => {
      return restaurants;
    });
}
