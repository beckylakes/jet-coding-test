"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import qs from "query-string";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPostcode = searchParams.get("postcode") || "";

  const [postcode, setPostcode] = useState(currentPostcode);

  useEffect(() => {
    // debounce input to prevent excessive API calls?
    let newUrl = "";

    if (postcode) {
    //REFACTOR
      const currentUrl = qs.parse(searchParams.toString());
      const key = "postcode";
      const value = postcode.trim();

      currentUrl[key] = value;

      newUrl = qs.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl,
      });
    } else {
    //REFACTOR
      const currentUrl = qs.parse(searchParams.toString());
      const keysToRemove = ["postcode"];

      keysToRemove.map((key) => delete currentUrl[key]);

      newUrl = qs.stringifyUrl({
        url: window.location.pathname,
        query: currentUrl,
      });
    }
    router.push(newUrl);
  }, [postcode, searchParams, router]);

  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
      <input
        type="search"
        placeholder="Enter postcode"
        className="flex h-10 w-full rounded-full bg-slate-700 px-3 py-2"
        onChange={(e) => setPostcode(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
