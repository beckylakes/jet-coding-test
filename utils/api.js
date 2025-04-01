"use server";

export async function getRestaurants(postcode) {
  return fetch(
    `${process.env.JET_API}${postcode}`
  )
    .then((response) => response.json())
}