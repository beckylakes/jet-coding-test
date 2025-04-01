import Image from "next/image";
import Card from "./Card";
import NoResults from "./NoResults";

const Collection = ({ restaurants, metaData }) => {
  const { area } = metaData;
  return restaurants?.length > 0 ? (
    <>
      <div className="flex items-center justify-between mb-0">
        <div className="flex items-center gap-1 md:gap-2">
          <Image
            src="/assets/location.svg"
            priority
            width={24}
            height={24}
            alt="Location icon"
          />
          <p className="text-sm md:text-lg font-semibold text-[#003049] line-clamp-1">
            {area}
          </p>
        </div>

        <p className="text-sm md:text-lg text-gray-500 whitespace-nowrap">
          Showing 10 of {restaurants.length} places
        </p>
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
