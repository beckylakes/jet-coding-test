"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import qs from "query-string";
import Image from "next/image";

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
    <div className="w-full flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">
        Find your next <span className="text-[#ff5a1f]">restaurant</span>
      </h2>

      <div className="flex items-center w-full max-w-lg px-4 py-2 rounded-full border border-[#ff5a1f50] transition-all duration-300 focus-within:border-[#ff5a1f] focus-within:ring-2 focus-within:ring-[#ff5a1f] bg-gray-100 shadow-sm">
        <Image
          src="/assets/search.svg"
          alt="search"
          width={20}
          height={20}
          className="mr-3 opacity-70"
        />
        <input
          type="search"
          placeholder="Enter postcode"
          className="w-full h-10 bg-transparent outline-none"
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
