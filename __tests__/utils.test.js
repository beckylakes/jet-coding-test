import { formUrlQuery, removeFromQuery, isValidPostcode } from "../utils/utils";

describe("formUrlQuery", () => {
  test("function should return a string", () => {
    const result = formUrlQuery({
      params: "",
      key: "postcode",
      value: "123",
    });

    expect(typeof result).toBe("string");
  });

  test("should not mutate the input", () => {
    const input = { params: "test", key: "postcode", value: "123" };
    formUrlQuery(input);
    expect(input).toEqual({ params: "test", key: "postcode", value: "123" });
  });

  test("should return error when params is not a string", () => {
    expect(() =>
      formUrlQuery({ params: null, key: "postcode", value: "123" })
    ).toThrow("Params must be a string");
    expect(() =>
      formUrlQuery({ params: undefined, key: "postcode", value: "123" })
    ).toThrow("Params must be a string");
    expect(() =>
      formUrlQuery({ params: [], key: "postcode", value: "123" })
    ).toThrow("Params must be a string");
  });

  test("should return error when key is not a string, or an empty string", () => {
    expect(() => formUrlQuery({ params: "", key: [], value: "123" })).toThrow(
      "Key is required and must be a string"
    );
    expect(() => formUrlQuery({ params: "", key: null, value: "123" })).toThrow(
      "Key is required and must be a string"
    );
    expect(() =>
      formUrlQuery({ params: "", key: undefined, value: "123" })
    ).toThrow("Key is required and must be a string");
    expect(() => formUrlQuery({ params: "", key: "", value: "123" })).toThrow(
      "Key is required and must be a string"
    );
  });

  test("should return error when value is not a string, or an empty string", () => {
    expect(() =>
      formUrlQuery({ params: "", key: "postcode", value: ["123"] })
    ).toThrow("Value is required and must be a string");
    expect(() =>
      formUrlQuery({ params: "", key: "postcode", value: null })
    ).toThrow("Value is required and must be a string");
    expect(() =>
      formUrlQuery({ params: "", key: "postcode", value: undefined })
    ).toThrow("Value is required and must be a string");
    expect(() =>
      formUrlQuery({ params: "", key: "postcode", value: "" })
    ).toThrow("Value is required and must be a string");
  });

  test("should add a key-value pair to the query string", () => {
    const result = formUrlQuery({
      params: "",
      key: "postcode",
      value: "123",
    });
    expect(result).toBe("/?postcode=123");
  });

  test("should update existing key with a new value in the query string", () => {
    const result = formUrlQuery({
      params: "postcode=123",
      key: "postcode",
      value: "456",
    });
    expect(result).toBe("/?postcode=456");
  });

  test("should correctly encode spaces in values", () => {
    const result = formUrlQuery({
      params: "",
      key: "postcode",
      value: "EC4M 7RF",
    });
    expect(result).toBe("/?postcode=EC4M%207RF");
  });
});

describe("removeFromQuery", () => {
  test("function should return a string", () => {
    const result = removeFromQuery({
      params: "",
      keysToRemove: ["postcode"],
    });

    expect(typeof result).toBe("string");
  });

  test("should not mutate the input", () => {
    const input = { params: "test", keysToRemove: ["postcode"] };
    removeFromQuery(input);
    expect(input).toEqual({ params: "test", keysToRemove: ["postcode"] });
  });

  test("should return error when params is not a string", () => {
    expect(() =>
      removeFromQuery({ params: null, keysToRemove: "postcode" })
    ).toThrow("Params must be a string");
    expect(() =>
      removeFromQuery({ params: undefined, keysToRemove: "postcode" })
    ).toThrow("Params must be a string");
    expect(() =>
      removeFromQuery({ params: [], keysToRemove: "postcode" })
    ).toThrow("Params must be a string");
  });

  test("should return error when keysToRemove is not an array, or empty", () => {
    expect(() => removeFromQuery({ params: "", keysToRemove: "123" })).toThrow(
      "KeysToRemove is required and must be an array with at least 1 key"
    );
    expect(() => removeFromQuery({ params: "", keysToRemove: null })).toThrow(
      "KeysToRemove is required and must be an array with at least 1 key"
    );
    expect(() =>
      removeFromQuery({ params: "", keysToRemove: undefined })
    ).toThrow(
      "KeysToRemove is required and must be an array with at least 1 key"
    );
    expect(() => removeFromQuery({ params: "", keysToRemove: [] })).toThrow(
      "KeysToRemove is required and must be an array with at least 1 key"
    );
  });

  test("removes postcode from query params", async () => {
    const result = removeFromQuery({
      params: "postcode=SW1A%201AA",
      keysToRemove: ["postcode"],
    });
    expect(result).toBe("/");
  });

  test("removes keys with encoded characters", () => {
    const result = removeFromQuery({
      params: "postcode=EC4M%207RF",
      keysToRemove: ["postcode"],
    });
    expect(result).toBe("/");
  });
});

describe("isValidPostcode", () => {
  test("returns a boolean", () => {
    expect(typeof isValidPostcode("A")).toBe('boolean');
  });

  test("should not mutate the input", () => {
    const input = "ABC123";
    isValidPostcode(input);
    expect(input).toEqual("ABC123");
  });

  test("returns false when too short (less than 2 characters)", () => {
    expect(isValidPostcode("A")).toBe(false);
    expect(isValidPostcode("1")).toBe(false);
  });

  test("returns false when too long (over 8 characters)", () => {
    expect(isValidPostcode("ABCD12345")).toBe(false);
    expect(isValidPostcode("A1 B2 C3 D4")).toBe(false);
  });

  test("returns false for invalid characters", () => {
    expect(isValidPostcode("EC1A!1BB")).toBe(false);
    expect(isValidPostcode("EC1A✅1BB")).toBe(false);
  });

  test("returns false for inputs that are not strings", () => {
    expect(isValidPostcode(null)).toBe(false);
    expect(isValidPostcode(undefined)).toBe(false);
    expect(isValidPostcode(12345)).toBe(false);
    expect(isValidPostcode({})).toBe(false);
  });

  test("handles whitespace-only strings", () => {
    expect(isValidPostcode("  ")).toBe(false);
    expect(isValidPostcode(" A ")).toBe(false);
  });

  test("should handle uppercase and lowercase characters", () => {
    expect(isValidPostcode("ab12cd")).toBe(true);
    expect(isValidPostcode("AB12cd")).toBe(true);
  });

  test("returns true for valid postcodes", () => {
    expect(isValidPostcode("EC4M 7RF")).toBe(true);
    expect(isValidPostcode("L4 0TH")).toBe(true);
    expect(isValidPostcode("BN11AE")).toBe(true);
  });
});
