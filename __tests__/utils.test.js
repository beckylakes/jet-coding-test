import { formUrlQuery } from "../utils/utils";

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
