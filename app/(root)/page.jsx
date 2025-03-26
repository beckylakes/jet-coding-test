import Collection from "@/components/Collection";
import SearchBar from "@/components/SearchBar";
import { getRestaurants } from "@/utils/api";

export default async function Home() {
  const postcode = "KT25SY"
  const restaurants = await getRestaurants(postcode)

  return (
    <section>
      <SearchBar/>
      <Collection restaurants={restaurants}/>
    </section>
  );
}
