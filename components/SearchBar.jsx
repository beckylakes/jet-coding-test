"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { formUrlQuery, isValidPostcode, removeFromQuery } from "@/utils/utils";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");

  const handleInput = (input) => {
    const formattedInput = input.trim();

    if (formattedInput === "") {
      setPostcode("");
      setError("");
      return;
    }

    if (isValidPostcode(formattedInput)) {
      setPostcode(formattedInput);
      setError("");
    } else {
      setError("Postcodes must be 2-8 characters long, and you cannot use special characters or emojis.");
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      let newUrl = "";

      if (postcode) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "postcode",
          value: postcode,
        });
      } else {
        newUrl = removeFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["postcode"],
        });
      }

      router.push(newUrl);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [postcode, searchParams, router]);

  return (
    <div className="w-full flex flex-col items-center gap-2">
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
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
      <div className="min-h-4">
        {error && (
          <div className="flex items-center p-1 text-xs text-red-800 border border-red-300 rounded-2xl bg-red-50 max-w-lg w-full" role="alert">
          <svg className="shrink-0 inline w-3 h-3 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Oops!</span> {error}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
