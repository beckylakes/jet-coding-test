import qs from "query-string";

export function formUrlQuery({ params, key, value }) {
  if (typeof params !== 'string') throw new Error('Params must be a string');
  if (!key || typeof key !== 'string') throw new Error('Key is required and must be a string');
  if (!value || typeof value !== 'string') throw new Error('Value is required and must be a string');

  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

export function removeFromQuery({ params, keysToRemove }) {
  if (typeof params !== 'string') throw new Error('Params must be a string');
  if (!keysToRemove || !Array.isArray(keysToRemove) || keysToRemove.length === 0) throw new Error('KeysToRemove is required and must be an array with at least 1 key');

  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

export const isValidPostcode = (input) => /^[a-zA-Z0-9\s]+$/.test(input);