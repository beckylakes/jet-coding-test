"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import qs from "query-string";
import Image from "next/image";
import { formUrlQuery, removeFromQuery } from "@/utils/utils";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPostcode = searchParams.get("postcode") || "";

  const [postcode, setPostcode] = useState(currentPostcode);

  useEffect(() => {
    const delayDebounce = setTimeout(async () => {
      let newUrl = "";

      if (postcode) {
        newUrl = await formUrlQuery({
          params: searchParams.toString(),
          key: "postcode",
          value: postcode,
        });
      } else {
        newUrl = await removeFromQuery({
          params: searchParams.toString,
          keysToRemove: ["postcode"],
        });
      }
      
      router.push(newUrl);
    }, 500);

    return () => clearTimeout(delayDebounce);
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
