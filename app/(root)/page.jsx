import Collection from "@/components/Collection";
import SearchBar from "@/components/SearchBar";
import { getRestaurants } from "@/utils/api";

export default async function Home({ searchParams }) {
  const finalSearchParams = await searchParams;
  const { postcode } = finalSearchParams;
  const { metaData, restaurants } = postcode ? await getRestaurants(postcode) : await getRestaurants("EC4M7RF");

  return (
    <section className="wrapper w-full my-6 flex flex-col gap-8 md:gap-10 lg:mx-auto xl:px-0">
      <div className="flex w-full flex-col md:flex-row">
        <SearchBar />
      </div>
      <Collection restaurants={restaurants} metaData={metaData} />
    </section>
  );
}
