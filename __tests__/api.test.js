/**
 * @jest-environment node
 */

import { createServer } from "http";
import { apiResolver } from "next/dist/server/api-utils/node/api-resolver";
import supertest from "supertest";
import { getRestaurants } from "../utils/api";

jest.mock("../utils/api", () => ({
  getRestaurants: jest.fn(async (postcode) => {
    const mockData = {
      CT12EH: {
        restaurants: [
          {
            id: 1,
            name: "Italian Restaurant",
            cuisines: [{ name: "Italian" }],
            rating: { starRating: 4.5 },
            address: { firstLine: "123 Test Street" },
          },
          {
            id: 2,
            name: "Japanese Restaurant",
            cuisines: [{ name: "Japanese" }],
            rating: { starRating: 4.8 },
            address: { firstLine: "123 Test Street" },
          },
        ],
      },
      EC4M7RF: {
        restaurants: [
          {
            id: 1,
            name: "Chicken Shop",
            cuisines: [{ name: "Fast Food" }],
            rating: { starRating: 3.5 },
            address: { firstLine: "123 Test Street" },
          },
          {
            id: 2,
            name: "Chinese Takeaway",
            cuisines: [{ name: "Chinese" }],
            rating: { starRating: 4.2 },
            address: { firstLine: "123 Test Street" },
          },
        ],
      },
    };

    return mockData[postcode] || { restaurants: [] };
  }),
}));

async function handler(req, res) {
  const { searchParams } = new URL(req.url, "http://localhost");
  let postcode = searchParams.get("postcode") || "EC4M7RF";

  try {
    const data = await getRestaurants(postcode);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({ error: "Server Error: failed to fetch restaurants" })
    );
  }
}

export function testClient(handler) {
  const server = createServer((req, res) =>
    apiResolver(req, res, undefined, handler, {}, undefined)
  );
  return supertest(server);
}

describe("API Integration Tests", () => {
  test("should display default restaurants using EC4M7RF when no postcode is provided", async () => {
    const client = testClient(handler);
    const response = await client.get("/");
    const { status, body } = response;

    expect(status).toBe(200);
    expect(Array.isArray(body.restaurants)).toBe(true);
    expect(body.restaurants).toHaveLength(2);

    body.restaurants.forEach((restaurant) => {
      expect(restaurant).toHaveProperty("name");
      expect(restaurant).toHaveProperty("cuisines");
      expect(Array.isArray(restaurant.cuisines)).toBe(true);
      expect(restaurant).toHaveProperty("rating.starRating");
      expect(typeof restaurant.rating.starRating).toBe("number");
      expect(restaurant).toHaveProperty("address.firstLine");
      expect(typeof restaurant.address.firstLine).toBe("string");
    });

    expect(body.restaurants[0]).toMatchObject({
      id: 1,
      name: "Chicken Shop",
      cuisines: [{ name: "Fast Food" }],
      rating: { starRating: 3.5 },
      address: { firstLine: "123 Test Street" },
    });
  });

  test("should fetch restaurants for a valid postcode", async () => {
    const client = testClient(handler);
    const response = await client.get("/?postcode=CT12EH");
    const { status, body } = response;

    expect(status).toBe(200);
    expect(Array.isArray(body.restaurants)).toBe(true);
    expect(body.restaurants).toHaveLength(2);

    expect(body.restaurants[0].name).toBe("Italian Restaurant");
    expect(body.restaurants[0].cuisines[0].name).toBe("Italian");
    expect(body.restaurants[0].rating.starRating).toBe(4.5);
    expect(body.restaurants[0].address.firstLine).toBe("123 Test Street");
  });

  test("should return an empty array for an invalid postcode", async () => {
    const client = testClient(handler);
    const response = await client.get("/?postcode=ABC123");
    const { status, body } = response;

    expect(status).toBe(200);
    expect(Array.isArray(body.restaurants)).toBe(true);
    expect(body.restaurants).toHaveLength(0);
  });

  test("should return an empty array when a valid postcode has no restaurants", async () => {
    const client = testClient(handler);
    const response = await client.get("/?postcode=ZE2");
    const { status, body } = response;

    expect(status).toBe(200);
    expect(Array.isArray(body.restaurants)).toBe(true);
    expect(body.restaurants).toHaveLength(0);
  });
});
