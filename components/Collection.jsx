import Card from "./Card";
import NoResults from "./NoResults";

const Collection = async ({ restaurants, metaData }) => {
  const { area } = metaData;
  return restaurants?.length > 0 ? (
    <>
      <p className="text-lg font-semibold text-gray-800 mb-4">
        Showing results for: <span className="text-[#ff5a1f]">{area}</span>
      </p>
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
