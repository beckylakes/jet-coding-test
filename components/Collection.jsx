import Image from "next/image";
import Card from "./Card";
import NoResults from "./NoResults";

const Collection = async ({ restaurants, metaData }) => {
  const { area } = metaData;
  return restaurants?.length > 0 ? (
    <>
      <div className="flex items-center gap-2 mb-2">
        <Image
          src="/assets/location.svg"
          width={24}
          height={24}
          alt="Location icon"
        />
        <p className="text-lg font-semibold text-gray-800 truncate">{area}</p>
      </div>

      <div className="flex flex-col items-center px-7">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {restaurants.slice(0, 10).map((restaurant) => {
            return (
              <li key={restaurant?.id} className="flex justify-center w-full">
                <Card restaurant={restaurant} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  ) : (
    <NoResults metaData={metaData} />
  );
};

export default Collection;
