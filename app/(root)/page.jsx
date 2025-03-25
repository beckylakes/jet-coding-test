import Collection from "@/components/Collection";
import { getRestaurants } from "@/utils/api";

export default async function Home() {
  const postcode = "KT25SY"
  const restaurants = await getRestaurants(postcode)

  return (
    <section>
      <Collection restaurants={restaurants}/>
    </section>
  );
}
