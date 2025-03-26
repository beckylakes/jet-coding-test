import Collection from "@/components/Collection";
import SearchBar from "@/components/SearchBar";
import { getRestaurants } from "@/utils/api";

export default async function Home({ searchParams }) {
  const finalSearchParams = await searchParams;
  const { postcode } = finalSearchParams;
  const restaurants = await getRestaurants(postcode);

  return (
    <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <div className="flex w-full flex-colmd:flex-row">
        <SearchBar />
      </div>
      <Collection restaurants={restaurants} />
    </section>
  );
}
