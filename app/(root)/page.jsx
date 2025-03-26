import Collection from "@/components/Collection";
import SearchBar from "@/components/SearchBar";
import { getRestaurants } from "@/utils/api";

export default async function Home({ searchParams }) {
  const finalSearchParams = await searchParams;
  const { postcode } = finalSearchParams;
  const restaurants = postcode ? await getRestaurants(postcode) : await getRestaurants("EC4M7RF")

  return (
    <section className="max-w-7xl w-full my-8 flex flex-col gap-8 md:gap-10 lg:mx-auto xl:px-0">
      <div className="flex max-w-[600px] flex-col md:flex-row">
        <SearchBar />
      </div>
      <Collection restaurants={restaurants} />
    </section>
  );
}
